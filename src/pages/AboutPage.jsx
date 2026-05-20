import { SectionIntro, FeatureGrid } from "../components/common/Sections";
import { useSeo } from "../components/common/useSeo";
import {
  FiTarget,
  FiEye,
  FiShield,
  FiCpu,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";

export function AboutPage() {
  useSeo(
    "About",
    "Learn Code furnace mission, vision, values, and delivery approach.",
  );

  return (
    <>
      <section className="section">
        <SectionIntro
          title="About CODE furnace"
          text="We are a digital solutions company based in Narok, Kenya, helping businesses grow through modern technology, automation, and scalable digital systems."
        />
        <div className="grid cols-3">
          <article className="card">
            <h3>
              <FiTarget /> Mission
            </h3>
            <p>
              To help businesses grow through modern technology, automation, and
              scalable digital solutions.
            </p>
          </article>
          <article className="card">
            <h3>
              <FiEye /> Vision
            </h3>
            <p>
              To become East Africa’s leading digital transformation and AI
              automation company.
            </p>
          </article>
          <article className="card">
            <h3>
              <FiShield /> Why Businesses Trust Us
            </h3>
            <p>
              Premium delivery standards, secure architecture, and transparent
              collaboration from kickoff to support.
            </p>
          </article>
        </div>
      </section>

      <section className="section alt">
        <SectionIntro
          title="Technology Stack"
          text="React, Node.js, cloud platforms, automation systems, and enterprise integrations."
        />
        <FeatureGrid
          items={[
            {
              title: "Scalable Systems",
              text: "Cloud-ready architecture, API-first development, and performance optimization.",
              icon: FiCpu,
            },
            {
              title: "Business-Focused Delivery",
              text: "Every build is aligned with operational goals, revenue, and growth strategy.",
              icon: FiCheckCircle,
            },
            {
              title: "Team Collaboration",
              text: "Cross-functional design, engineering, and support teams moving in one direction.",
              icon: FiUsers,
            },
          ]}
        />
      </section>
    </>
  );
}
