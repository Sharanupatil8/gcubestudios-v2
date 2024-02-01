import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace 'your-whatsapp-number' with the actual WhatsApp number
    const whatsappLink = "https://wa.me/+917892999258";

    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      className="fixed bottom-5 right-5 bg-green-600 py-3 px-4 rounded-full animate-bounce cursor-pointer"
      onClick={handleWhatsAppClick}
    >
      {/* WhatsApp icon from FontAwesome */}
      <FontAwesomeIcon icon={faWhatsapp} className="text-white" size="2x" />
    </div>
  );
};

export default WhatsAppButton;
