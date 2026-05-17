import {
  FiBriefcase,
  FiTarget,
  FiGrid,
  FiClock,
  FiMapPin,
  FiUser,
  FiSend,
  FiMessageCircle,
  FiMail,
} from 'react-icons/fi'

const addOns = [
  'M-Pesa integration',
  'Client login system',
  'Management dashboard',
  'Email automation',
  'Analytics dashboard',
  'Training session',
  'Card / online payment gateway',
  'Booking system',
  'Login system',
  'Employee management',
  'Digital marketing',
  'Branding services',
  'SEO setup',
  'WhatsApp automation',
]

export function QuoteRequestForm() {
  return (
    <form className="card quote-form">
      <h2>Get A Quote</h2>
      <p>Fill in your details and reach out to us.</p>

      <section className="quote-step">
        <h3><FiBriefcase /> 01 Business information</h3>
        <input placeholder="Company name" />
        <input placeholder="Industry / sector (Hotel, clinic, school, shop...)" />
        <textarea rows="4" placeholder="Describe your business and what you sell" />
      </section>

      <section className="quote-step">
        <h3><FiTarget /> 02 Your need</h3>
        <input placeholder="What do you need right now? (website, booking system, mobile app...)" />
        <select defaultValue=""><option value="" disabled>Main goal</option><option>Sales growth</option><option>Automation</option><option>Lead generation</option><option>Brand visibility</option></select>
        <select defaultValue="No"><option>No</option><option>Yes</option></select>
        <input placeholder="If yes, paste the link and what is not working" />
      </section>

      <section className="quote-step">
        <h3><FiGrid /> 03 Add-ons you may need</h3>
        <p>Select any extra features you want us to include in the quote.</p>
        <div className="addons-grid">
          {addOns.map((item) => (
            <label key={item} className="addon-item">
              <input type="checkbox" /> {item}
            </label>
          ))}
        </div>
      </section>

      <section className="quote-step">
        <h3><FiClock /> 04 Timeline and budget</h3>
        <select defaultValue="Immediately"><option>Immediately</option><option>Within 1 month</option><option>1-3 months</option><option>Flexible</option></select>
        <select defaultValue=""><option value="" disabled>Estimated budget</option><option>Under $1,000</option><option>$1,000 - $5,000</option><option>$5,000 - $15,000</option><option>$15,000+</option></select>
      </section>

      <section className="quote-step">
        <h3><FiMapPin /> 05 Location and contact</h3>
        <input placeholder="City of operation" />
        <select defaultValue="WhatsApp"><option>WhatsApp</option><option>Phone call</option><option>Email</option></select>
      </section>

      <section className="quote-step">
        <h3><FiUser /> 06 Your details</h3>
        <input placeholder="Full name" />
        <input placeholder="WhatsApp number (+254...)" />
        <input type="email" placeholder="Email" />
        <select defaultValue="Yes"><option>Yes</option><option>No</option></select>
      </section>

      <div className="row gap-sm">
        <button className="btn btn-primary" type="submit"><FiSend /> Click to send</button>
        <button className="btn btn-secondary" type="button"><FiMessageCircle /> Talk to us now</button>
        <button className="btn btn-secondary" type="button"><FiMail /> Send by email instead</button>
      </div>
    </form>
  )
}

