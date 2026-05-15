import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { HomePage } from '../pages/Home/HomePage'
import { AboutPage } from '../pages/About/AboutPage'
import { ServicesPage } from '../pages/Services/ServicesPage'
import { PricingPage } from '../pages/Pricing/PricingPage'
import { ContactPage } from '../pages/Contact/ContactPage'
import { PortfolioPage } from '../pages/Portfolio/PortfolioPage'
import { FAQPage } from '../pages/FAQ/FAQPage'
import { WebsiteDevelopmentPage } from '../pages/WebsiteDevelopment/WebsiteDevelopmentPage'
import { SoftwareDevelopmentPage } from '../pages/SoftwareDevelopment/SoftwareDevelopmentPage'
import { BookingSystemsPage } from '../pages/BookingSystems/BookingSystemsPage'
import { MobileAppsPage } from '../pages/MobileApps/MobileAppsPage'
import { AIAutomationPage } from '../pages/AIAutomation/AIAutomationPage'

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
        <Route path="/services/web-development" element={<WebsiteDevelopmentPage />} />
        <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/services/booking-systems" element={<BookingSystemsPage />} />
        <Route path="/services/mobile-apps" element={<MobileAppsPage />} />
        <Route path="/services/ai-automation" element={<AIAutomationPage />} />
      </Route>
    </Routes>
  )
}

