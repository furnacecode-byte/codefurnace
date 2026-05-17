import { useSeo } from '../../components/common/useSeo'

export function PrivacyPolicyPage() {
  useSeo('Privacy Policy', 'Privacy policy for Code Furnance digital solutions platform.')
  return (
    <section className="section">
      <h1>Privacy Policy</h1>
      <article className="card legal-doc">
        <p>We collect only the information required to deliver services, respond to inquiries, and improve client experience.</p>
        <p>Data may include contact details, project requirements, and communications submitted through forms.</p>
        <p>We apply reasonable security controls to protect data and do not sell personal information to third parties.</p>
      </article>
    </section>
  )
}

export function TermsPage() {
  useSeo('Terms & Conditions', 'Terms and conditions for Code Furnance services.')
  return (
    <section className="section">
      <h1>Terms & Conditions</h1>
      <article className="card legal-doc">
        <p>Project scope, timelines, payment schedules, and support terms are defined in each proposal or signed agreement.</p>
        <p>Clients are responsible for timely feedback and content submission during project delivery.</p>
        <p>By using our website and services, you agree to these terms and applicable laws in Kenya.</p>
      </article>
    </section>
  )
}

