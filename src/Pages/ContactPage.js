// AboutUsPage.js
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeadingSecondary from "../Components/SecondaryHeading";
import Direction from "../Components/Direction";
import ContactForm from "../Components/ContactForm";
import WhatsAppButton from "../Components/Whatsapp";

const words = ["Meet Our Experts"];
const AboutUsPage = () => {
  return (
    <section>
      <section className="w-full banner-small">
        <Navbar />
        <div className="max-w-6xl mx-auto text-center text-white text-3xl md:text-6xl font-bold mt-20 tracking-wide ">
          <h2>Contact us</h2>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto py-8 md:py-12 lg:py-16">
        <HeadingSecondary words={words} />
        <ContactForm />
        <Direction />
      </section>

      <Footer />
      <WhatsAppButton />
    </section>
  );
};

export default AboutUsPage;
