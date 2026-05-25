import { useEffect, useMemo, useRef, useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import KNOWLEDGE_BASE, { QUICK_ACTIONS } from "../../ai/knowledgeBase";
import { matchIntent } from "../../ai/intentMatcher";
import { executeNavigation } from "../../ai/navigationHelpers";
import {
  ASSISTANT_NAME,
  FALLBACK_MESSAGE,
  GREETING_MESSAGE,
} from "../../ai/responses";
import { ChatWindow } from "./ChatWindow";
import "./assistant.css";

const STORAGE_KEY = "cf-ai-assistant-state";

const formatTime = (date = new Date()) =>
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const createMessage = ({ role, text, link = "" }) => ({
  id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  role,
  text,
  link,
  timestamp: formatTime(),
});

const initialMessages = [
  createMessage({ role: "assistant", text: GREETING_MESSAGE }),
];

export function AiAssistant() {
  const location = useLocation();
  const navigate = useNavigate();
  const listRef = useRef(null);

  const [persistedState] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    try {
      return JSON.parse(stored);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  });
  const [isOpen, setIsOpen] = useState(Boolean(persistedState?.isOpen));
  const [messages, setMessages] = useState(
    Array.isArray(persistedState?.messages) && persistedState.messages.length
      ? persistedState.messages
      : initialMessages,
  );
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        isOpen,
        messages,
      }),
    );
  }, [isOpen, messages]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const quickActions = useMemo(() => QUICK_ACTIONS, []);

  const handleNavigation = (link) => {
    executeNavigation({ link, location, navigate });
  };

  const sendWithIntent = (rawValue, options = {}) => {
    const { autoNavigate = true } = options;
    const value = rawValue.trim();
    if (!value) return;

    const userMessage = createMessage({ role: "user", text: value });
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      const intent = matchIntent(value, KNOWLEDGE_BASE);

      const responseMessage = intent
        ? createMessage({
            role: "assistant",
            text: intent.response,
            link: intent.link,
          })
        : createMessage({ role: "assistant", text: FALLBACK_MESSAGE });

      setMessages((prev) => [...prev, responseMessage]);
      setIsTyping(false);

      if (autoNavigate && intent?.action === "navigate" && intent.link) {
        handleNavigation(intent.link);
      }
    }, 550);
  };

  return (
    <div className="ai-assistant-root" aria-label={ASSISTANT_NAME}>
      <ChatWindow
        isOpen={isOpen}
        messages={messages}
        input={input}
        setInput={setInput}
        onSend={() => sendWithIntent(input)}
        onClose={() => setIsOpen(false)}
        onQuickAction={(action) => {
          sendWithIntent(action.label, { autoNavigate: false });
          handleNavigation(action.link);
        }}
        quickActions={quickActions}
        isTyping={isTyping}
        onNavigateLink={handleNavigation}
        listRef={listRef}
      />

      <button
        type="button"
        className="ai-fab"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
        aria-expanded={isOpen}
      >
        <FiMessageSquare />
        <span>{isOpen ? "Close" : "Ask AI"}</span>
      </button>
    </div>
  );
}
