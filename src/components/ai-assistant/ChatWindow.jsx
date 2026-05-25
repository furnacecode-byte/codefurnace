import { motion, AnimatePresence } from "framer-motion";
import { MessageBubble } from "./MessageBubble";
import { QuickReplies } from "./QuickReplies";

export function ChatWindow({
  isOpen,
  messages,
  input,
  setInput,
  onSend,
  onClose,
  onQuickAction,
  quickActions,
  isTyping,
  onNavigateLink,
  listRef,
}) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.section
          className="ai-chat-window"
          role="dialog"
          aria-modal="false"
          aria-label="Code Furnace assistant"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <header className="ai-chat-head">
            <div>
              <p>AI Assistant</p>
              <h3>Code Furnace Navigator</h3>
            </div>
            <button type="button" className="ai-close" onClick={onClose} aria-label="Close assistant">
              x
            </button>
          </header>

          <div className="ai-chat-messages" ref={listRef}>
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                role={message.role}
                text={message.text}
                timestamp={message.timestamp}
                link={message.link}
                onLinkClick={onNavigateLink}
              />
            ))}
            {isTyping ? (
              <div className="ai-typing" aria-live="polite">
                <span />
                <span />
                <span />
              </div>
            ) : null}
          </div>

          <QuickReplies actions={quickActions} onSelect={onQuickAction} />

          <form
            className="ai-input-row"
            onSubmit={(event) => {
              event.preventDefault();
              onSend();
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about services, pricing, projects..."
              aria-label="Assistant input"
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
