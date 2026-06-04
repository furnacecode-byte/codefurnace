export function PricingCards({
  plans,
  ctaLabel = "Choose Plan",
  onCtaClick,
}) {
  const jumpToForm = () => {
    const node = document.getElementById("quote-form");
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="grid cols-3">
      {plans.map((plan) => (
        <article
          key={plan.name}
          className={plan.recommended ? "card plan recommended" : "card plan"}
        >
          {plan.recommended && <span className="badge">Recommended</span>}
          <h3>{plan.name}</h3>
          <p className="price">{plan.price}</p>
          <p>{plan.setup}</p>
          <ul>
            {plan.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <button
            className="btn btn-primary"
            onClick={() => {
              if (onCtaClick) {
                onCtaClick(plan);
                return;
              }
              jumpToForm();
            }}
            type="button"
          >
            {plan.ctaLabel || ctaLabel}
          </button>
        </article>
      ))}
    </div>
  );
}

export function ComparisonTable({ rows, columns = [] }) {
  const resolvedColumns =
    columns.length > 0 ? columns : ["Starter", "Growth", "Enterprise"];

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            {resolvedColumns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature || row.label}>
              <td>{row.feature || row.label}</td>
              {(row.values || [row.starter, row.growth, row.enterprise]).map(
                (value, index) => (
                  <td key={`${row.feature || row.label}-${index}`}>{value}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
