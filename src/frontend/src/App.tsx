import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import AdminPanel from "./components/AdminPanel";
import AnnouncementBanner from "./components/AnnouncementBanner";
import ClassesSection from "./components/ClassesSection";
import ContactSection from "./components/ContactSection";
import EnquirySection from "./components/EnquirySection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import Navbar from "./components/Navbar";
import ResourcesSection from "./components/ResourcesSection";
import StudyTipsSection from "./components/StudyTipsSection";
import TeacherSection from "./components/TeacherSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhatsAppButton from "./components/WhatsAppButton";
import { useInternetIdentity } from "./hooks/useInternetIdentity";
import { useIsAdmin } from "./hooks/useQueries";

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const { data: isAdmin } = useIsAdmin();
  const { identity } = useInternetIdentity();

  const handleAdminToggle = () => setShowAdmin((prev) => !prev);

  return (
    <div className="min-h-screen bg-background font-body">
      <Toaster position="top-right" />
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBanner />
        <Navbar
          showAdminButton={!!identity && !!isAdmin}
          onAdminToggle={handleAdminToggle}
          showAdmin={showAdmin}
        />
      </div>
      {showAdmin && isAdmin ? (
        <AdminPanel />
      ) : (
        <main>
          <HeroSection />
          <HighlightsSection />
          <ClassesSection />
          <TestimonialsSection />
          <TeacherSection />
          <StudyTipsSection />
          <ResourcesSection />
          <EnquirySection />
          <ContactSection />
        </main>
      )}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
