import Header from "../../components/global/header"
import HeroSection from "../../components/global/hero-section"
import OutdoorActivities from "../../components/about/outdoor-activities"
import Statistics from "../../components/about/statistics"
import WhyChoose from "../../components/about/why-choose"
import VideoSection from "../../components/about/video-section"
import ExpertStaff from "../../components/about/expert-staff"
import GlobalClients from "../../components/about/clients"
import Footer from "../../components/global/footer"
export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection title="About Us" breadcrumb="About Us" />
      <OutdoorActivities />
      <Statistics />
      <WhyChoose />
      <VideoSection />
      <ExpertStaff />
      <GlobalClients />
      <Footer />
    </div>
  )
}
