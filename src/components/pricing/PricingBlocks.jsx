export function PricingCards({ plans, ctaLabel = "Choose Plan" }) {
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
            onClick={jumpToForm}
            type="button"
          >
            {ctaLabel}
          </button>
        </article>
      ))}
    </div>
  );
}

export function ComparisonTable({ rows }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Starter</th>
            <th>Growth</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature}>
              <td>{row.feature}</td>
              <td>{row.starter}</td>
              <td>{row.growth}</td>
              <td>{row.enterprise}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
