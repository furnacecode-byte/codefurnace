import { ASSISTANT_NAME } from "../../ai/responses";

export function MessageBubble({ role, text, timestamp, link, onLinkClick }) {
  const isAssistant = role === "assistant";

  return (
    <article className={isAssistant ? "ai-msg ai-msg-assistant" : "ai-msg ai-msg-user"}>
      <p>{text}</p>
      {isAssistant && link ? (
        <button
          className="ai-msg-link"
          type="button"
          onClick={() => onLinkClick(link)}
        >
          Open page
        </button>
      ) : null}
      <footer>
        <span>{isAssistant ? ASSISTANT_NAME : "You"}</span>
        <time>{timestamp}</time>
      </footer>
    </article>
  );
}
