import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ServicesPage } from "../pages/Services/ServicesPage";
import { PricingPage } from "../pages/PricingPage";
import { ContactPage } from "../pages/ContactPage";
import { ProjectsPage } from "../pages/PortfolioPage";
import { FAQPage } from "../pages/FAQPage";
import { WebsiteDevelopmentPage } from "../pages/service/WebsiteDevelopmentPage";
import { SoftwareDevelopmentPage } from "../pages/service/SoftwareDevelopmentPage";
import { BookingSystemsPage } from "../pages/service/BookingSystemsPage";
import { MobileAppsPage } from "../pages/service/MobileAppsPage";
import { AIAutomationPage } from "../pages/service/AIAutomationPage";
import { QuoteBookingPage } from "../pages/Quote/QuoteBookingPage";
import { CareersPage } from "../pages/CareersPage";
import { PrivacyPolicyPage, TermsPage } from "../pages/LegalPages";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route
          path="/portfolio"
          element={<Navigate replace to="/projects" />}
        />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/lets-talk" element={<QuoteBookingPage />} />
        <Route
          path="/quote-booking"
          element={<Navigate replace to="/lets-talk" />}
        />

        <Route
          path="/services/web-development"
          element={<WebsiteDevelopmentPage />}
        />
        <Route
          path="/services/web-development/packages"
          element={<WebsiteDevelopmentPage />}
        />
        <Route
          path="/services/software-development"
          element={<SoftwareDevelopmentPage />}
        />
        <Route
          path="/services/software-development/packages"
          element={<SoftwareDevelopmentPage />}
        />
        <Route
          path="/services/booking-systems"
          element={<BookingSystemsPage />}
        />
        <Route
          path="/services/booking-systems/packages"
          element={<BookingSystemsPage />}
        />
        <Route path="/services/mobile-apps" element={<MobileAppsPage />} />
        <Route
          path="/services/mobile-apps/packages"
          element={<MobileAppsPage />}
        />
        <Route path="/services/ai-automation" element={<AIAutomationPage />} />
        <Route
          path="/services/ai-automation/packages"
          element={<AIAutomationPage />}
        />
      </Route>
    </Routes>
  );
}
