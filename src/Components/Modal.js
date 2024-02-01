import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Modal({ setIsModalOpen }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    projectType: "",
    projectDetails: "",
  });
  const [sumbitButton, setSubmitButton] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setSubmitButton("true");

    const templateParams = {
      to_name: "Recipient Name",
      user_name: formData.fullName,
      user_email: formData.email,
      user_number: formData.phoneNumber,
      user_workType: formData.projectType,
      message: formData.projectDetails,
    };

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS values
    emailjs
      .send(
        "service_5exemxk",
        "template_2763mld",
        templateParams,
        "6ZilcqQVedaIgwqWF"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        // Optionally, you can reset the form after successful submission
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          projectType: "",
          projectDetails: "",
        });
        // Close the modal or provide appropriate feedback to the user
        setSubmitButton("Sent Successfully, we will get baack to you soon!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Handle error, show an error message, etc.
      });
  };
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-80 bg-black">
      {!sumbitButton && (
        <form
          className="bg-white p-4 m-3 md:p-12 rounded-md max-w-4xl shadow-lg overflow-y-auto"
          onSubmit={handleFormSubmit}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            type="button"
            className="text-gray-500 hover:text-gray-700 focus:outline-none flex justify-end w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-3xl mt-2 text-center mb-4">
            Get your free quote now
          </h2>

          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-600"
            >
              Your Name:
            </label>
            <input
              onChange={handleChange}
              value={formData.fullName}
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number:
            </label>
            <input
              onChange={handleChange}
              value={formData.phoneNumber}
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              E-Mail Id:
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              type="email"
              name="email"
              placeholder="example@mail.com"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="projectType"
              className="block text-sm font-medium text-gray-600"
            >
              Project/Work Type:
            </label>
            <input
              onChange={handleChange}
              value={formData.projectType}
              type="text"
              name="projectType"
              placeholder="Work Type"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="projectDetails"
              className="block text-sm font-medium text-gray-600"
            >
              Describe Your Project Details:
            </label>
            <textarea
              onChange={handleChange}
              value={formData.projectDetails}
              name="projectDetails"
              placeholder="Enter project details here"
              required
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      )}

      {sumbitButton && (
        <div className="bg-white text-green-500 p-4 m-3 md:p-12 rounded-md max-w-4xl shadow-lg overflow-y-auto">
          <button
            onClick={() => setIsModalOpen(false)}
            type="button"
            className="text-gray-900 hover:text-gray-700 focus:outline-none flex justify-end w-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-12 w-12"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                class="text-green-500"
                stroke-width="2"
              />
              <path d="M9 12l2 2 4-4" class="text-green-500" stroke-width="2" />
            </svg>
          </div>
          <p className="text-2xl text-center mb-4">
            Form submitted successfully!
          </p>
          <p className="text-center">We will get back to you shortly.</p>
        </div>
      )}
    </section>
  );
}

export default Modal;
