import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { HomePage } from '../pages/Home/HomePage'
import { AboutPage } from '../pages/About/AboutPage'
import { ServicesPage } from '../pages/Services/ServicesPage'
import { PricingPage } from '../pages/Pricing/PricingPage'
import { ContactPage } from '../pages/Contact/ContactPage'
import { PortfolioPage } from '../pages/Portfolio/PortfolioPage'
import { FAQPage } from '../pages/FAQ/FAQPage'
import { WebsiteDevelopmentPage, WebsiteDevelopmentPackagesPage } from '../pages/WebsiteDevelopment/WebsiteDevelopmentPage'
import { SoftwareDevelopmentPage, SoftwareDevelopmentPackagesPage } from '../pages/SoftwareDevelopment/SoftwareDevelopmentPage'
import { BookingSystemsPage, BookingSystemsPackagesPage } from '../pages/BookingSystems/BookingSystemsPage'
import { MobileAppsPage, MobileAppsPackagesPage } from '../pages/MobileApps/MobileAppsPage'
import { AIAutomationPage, AIAutomationPackagesPage } from '../pages/AIAutomation/AIAutomationPage'
import { QuoteBookingPage } from '../pages/Quote/QuoteBookingPage'
import { CareersPage } from '../pages/Careers/CareersPage'
import { PrivacyPolicyPage, TermsPage } from '../pages/Legal/LegalPages'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/quote-booking" element={<QuoteBookingPage />} />

        <Route path="/services/web-development" element={<WebsiteDevelopmentPage />} />
        <Route path="/services/web-development/packages" element={<WebsiteDevelopmentPackagesPage />} />
        <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/services/software-development/packages" element={<SoftwareDevelopmentPackagesPage />} />
        <Route path="/services/booking-systems" element={<BookingSystemsPage />} />
        <Route path="/services/booking-systems/packages" element={<BookingSystemsPackagesPage />} />
        <Route path="/services/mobile-apps" element={<MobileAppsPage />} />
        <Route path="/services/mobile-apps/packages" element={<MobileAppsPackagesPage />} />
        <Route path="/services/ai-automation" element={<AIAutomationPage />} />
        <Route path="/services/ai-automation/packages" element={<AIAutomationPackagesPage />} />
      </Route>
    </Routes>
  )
}

