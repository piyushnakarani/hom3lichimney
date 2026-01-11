import Hero from "../Hero/Hero";
import AboutSection from "../Aboutus/About";
import ServiceSection from "../Service/Service";
import WhyChooseUs from "../Chooseus/Chooseus";
import HowItWorks from "../Works/Work";
import ContactUs from "../Contactus/Contact";
import DownloadAppSection from "../Download/Download";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUs />
      <HowItWorks />
      <ContactUs />
      <DownloadAppSection />
    </div>
  );
};

export default Home;
