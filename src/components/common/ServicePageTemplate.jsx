import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { SectionIntro, FeatureGrid, FaqList } from "./Sections";
import { PricingCards, ComparisonTable } from "../pricing/PricingBlocks";

export function ServicePageTemplate({
  title,
  subtitle,
  features,
  pricingRoute,
  showPricingButton = true,
}) {
  return (
    <section className="section service-overview-page" id="service-overview">
      <Link className="btn btn-secondary" to="/services">
        <FiArrowLeft /> Back to Services
      </Link>
      <SectionIntro title={title} text={subtitle} />
      <div id="service-features">
        <FeatureGrid items={features} />
      </div>
      <div className="row gap-sm service-overview-actions">
        {showPricingButton && pricingRoute && (
          <Link className="btn btn-primary" to={pricingRoute}>
            View Prices
          </Link>
        )}
        <Link className="btn btn-secondary" to="/quote-booking">
          Book Consultation
        </Link>
      </div>
    </section>
  );
}

export function ServicePackagesTemplate({
  title,
  subtitle,
  plans,
  comparison,
  faqs,
  quoteForm,
}) {
  return (
    <>
      <section className="section alt" id="service-packages">
        <SectionIntro title={title} text={subtitle} />
        <PricingCards plans={plans} ctaLabel="Choose Package" />
      </section>
      <section className="section">
        <SectionIntro
          title="Feature Comparison"
          text="A quick side-by-side view."
        />
        <ComparisonTable rows={comparison} />
      </section>
      <section className="section alt">
        <SectionIntro title="FAQ" text="Common client questions." />
        <FaqList faqs={faqs} />
      </section>
      <section className="section" id="quote-form">
        {quoteForm}
      </section>
    </>
  );
}
