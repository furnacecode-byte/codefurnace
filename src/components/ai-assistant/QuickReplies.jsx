export function QuickReplies({ actions, onSelect }) {
  return (
    <div className="ai-quick-replies" aria-label="Quick actions">
      {actions.map((action) => (
        <button
          key={action.label}
          type="button"
          className="ai-chip"
          onClick={() => onSelect(action)}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}
