import { useSeo } from '../../components/common/useSeo'

export function ContactPage() {
  useSeo('Contact', 'Start your project with Code Furnace in Narok, Kenya.')
  return (
    <section className="section">
      <h2>Contact Code Furnace</h2>
      <p>Tell us your goals and we will prepare a tailored delivery plan.</p>
      <form className="contact-form card">
        <input placeholder="Your Name" />
        <input placeholder="Email Address" type="email" />
        <input placeholder="Phone Number" />
        <textarea rows="5" placeholder="Project details" />
        <button className="btn btn-primary" type="button">Send Inquiry</button>
      </form>
    </section>
  )
}

