import { useSeo } from "../components/common/useSeo";

export function CareersPage() {
  useSeo(
    "Careers",
    "Join Code Furnance and build modern digital solutions with a high-performance team.",
  );
  return (
    <section className="section">
      <h1>Careers</h1>
      <p>
        We are building a team of ambitious designers, engineers, and digital
        strategists.
      </p>
      <div className="grid cols-3">
        <article className="card">
          <h3>Frontend Engineer</h3>
          <p>React, UI systems, accessibility, and performance optimization.</p>
        </article>
        <article className="card">
          <h3>Backend Engineer</h3>
          <p>APIs, automation workflows, integrations, and cloud deployment.</p>
        </article>
        <article className="card">
          <h3>Product Designer</h3>
          <p>
            Premium UI/UX design for enterprise products and SaaS platforms.
          </p>
        </article>
      </div>
    </section>
  );
}
