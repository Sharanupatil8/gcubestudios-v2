import { useState } from "react";
import ReactDOM from "react-dom";
import Hero from "../Components/Hero";
import About from "../Components/About";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faCoffee } from "@fortawesome/free-solid-svg-icons";
import WhyUs from "../Components/WhyUs";
import HowItWorks from "../Components/HowItWorks";
import OurServices from "../Components/OurServices";
import Cta from "../Components/Cta";
import Projects from "../Components/Projects";
import CtaSmall from "../Components/CtaSmall";
import Footer from "../Components/Footer";
import Modal from "../Components/Modal";
import WhatsAppButton from "../Components/Whatsapp";
import YouTubeButton from "../Components/Youtube";

library.add(fab, faAngleDown, faCoffee);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Hero />
      <main>
        <About />
        <Cta setIsModalOpen={setIsModalOpen} />
        <OurServices />
        <CtaSmall setIsModalOpen={setIsModalOpen} />
        <WhyUs />
        <Projects />
        <HowItWorks />
        {isModalOpen &&
          ReactDOM.createPortal(
            <Modal setIsModalOpen={setIsModalOpen} />,
            document.getElementById("modal")
          )}
      </main>
      <WhatsAppButton />

      <Footer />
    </>
  );
}

export default App;
