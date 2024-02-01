import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberError, setNumberError] = useState(false);
  const [userMail, setUserMail] = useState("");
  const [userMailError, setUserMailError] = useState(false);
  const [appointmentTime, setAppointmentTime] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectDescriptionError, setProjectDescriptionError] = useState(false);
  const [submmitButtonText, setSubmitButtonText] = useState("Send Mail");
  const [formsubmitted, setFormsubmitted] = useState(false);

  function handleFullName(e) {
    setNameError(false);
    setFullName(e.target.value);
    if (e.target.value.length <= 2) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }

  function handlePhoneNumber(e) {
    if (e.target.value.length > 10) return;
    setPhoneNumber(e.target.value);
    if (e.target.value.length < 10) {
      setNumberError(true);
    } else {
      setNumberError(false);
    }
  }

  function hanldeUserMail(e) {
    setUserMail(e.target.value);

    if (e.target.value.includes("@")) {
      setUserMailError(false);
    } else {
      setUserMailError(true);
    }
  }

  function handleAppointment(e) {
    setAppointmentTime(e.target.value);
  }

  function hanldeProjectDescription(e) {
    setProjectDescription(e.target.value);
    if (e.target.value.length <= 10) {
      setProjectDescriptionError(true);
    } else {
      setProjectDescriptionError(false);
    }
  }

  function handleFormSumbit(e) {
    e.preventDefault();
    setSubmitButtonText("Sending.....");
    const templateParams = {
      to_name: "Recipient Name", // Replace with actual recipient name
      user_name: fullName,
      user_phoneNumber: phoneNumber,
      user_email: userMail,
      user_appointmentTime: appointmentTime,
      user_projectDescription: projectDescription,
    };
    emailjs
      .send(
        "service_5exemxk",
        "template_naei3a5",
        templateParams,
        "6ZilcqQVedaIgwqWF"
      )
      .then((response) => {
        if (response) {
          setFormsubmitted(true);
          setSubmitButtonText("Sent Succesfully we will get back to you soon");
        }

        // Handle success, reset form, show success message, etc.
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setSubmitButtonText("Error Please try again");
        // Handle error, show an error message, etc.
      });

    setFullName("");
    setPhoneNumber("");
    setUserMail("");
    setAppointmentTime("");
    setProjectDescription("");

    setSubmitButtonText("Send Mail");
  }
  return (
    <section className="max-w-6xl mx-auto my-8 md:my-12 py-8 px-4 md:py-12">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <motion.div
            className="w-full lg:w-1/3"
            whileInView={{ x: [100, 50, 0], opacity: [0.2, 0.5, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold  tracking-normal uppercase leading-[60px]">
              Keep In touch with us
            </h2>
            <p className="text-gray-500 mt-4">
              For inquiries, collaborations, or to bring your design vision to
              life, feel free to reach out to us at G Cube Studios. Our
              dedicated team is ready to assist you in creating extraordinary
              spaces tailored to your unique needs. Contact us via the details
              below, and let's embark on a journey to transform your ideas into
              stunning interior designs
            </p>
            <h2 className="mt-8 text-xl font-medium">Working Hours</h2>
            <ul className="flex flex-col space-y-1 mt-2 text-gray-500">
              <li>Monday to Friday: 9 AM to 7 PM</li>
              <li>Saturday: 9 AM to 4 PM</li>
              <li>Sunday: Holiday</li>
            </ul>
          </motion.div>
          <div className="w-full md:w-2/3">
            <motion.form
              onSubmit={handleFormSumbit}
              className="md:w-3/4 ms-auto flex flex-col space-y-8 mt-8 md:mt-0"
              whileInView={{ x: [-100, -50, 0], opacity: [0.2, 0.5, 1] }}
              transition={{ duration: 0.5 }}
            >
              {nameError && (
                <p className="text-red-500 -mb-8 pb-0">
                  Name Should have atleast 3 characters
                </p>
              )}
              <input
                onChange={handleFullName}
                value={fullName}
                type="text"
                placeholder="Full Name"
                className={`px-4 py-5 bg-gray-100 focus:shadow-sm focus:outline-none focus:border  rounded-md ${
                  nameError ? "focus:border-red-500" : "focus:border-green-500"
                }`}
                required
              />
              {numberError && (
                <p className="text-red-500 -mb-16 pb-0">
                  Enter a valid Phone Number
                </p>
              )}
              <input
                onChange={handlePhoneNumber}
                value={phoneNumber}
                type="number"
                className={`px-4 py-5 bg-gray-100 focus:shadow-sm focus:outline-none focus:border  rounded-md ${
                  numberError
                    ? "focus:border-red-500"
                    : "focus:border-green-500"
                }`}
                placeholder="Phone Number"
                required
              />
              {userMailError && (
                <p className="text-red-500 -mb-16 pb-0">Enter a valid mail</p>
              )}
              <input
                onChange={hanldeUserMail}
                value={userMail}
                type="mail"
                placeholder="Your Mail"
                className={`px-4 py-5 bg-gray-100 focus:shadow-sm focus:outline-none focus:border  rounded-md ${
                  userMailError
                    ? "focus:border-red-500"
                    : "focus:border-green-500"
                }`}
                required
              />
              <select
                onChange={handleAppointment}
                value={appointmentTime}
                className="px-5 py-5 bg-gray-100 focus:shadow-sm focus:outline-none focus:border focus:border-green-500 rounded-md"
                required
              >
                <option value="" className="text-gray-300">
                  Appointment Time
                </option>
                <option value="11am">11:00 AM</option>
                <option value="12pm">12:00 PM</option>
                <option value="1pm">1:00 PM</option>
                <option value="2pm">2:00 PM</option>
                <option value="3pm">3:00 PM</option>
                <option value="4pm">4:00 PM</option>
                <option value="5pm">5:00 PM</option>
                <option value="6pm">6:00 PM</option>
              </select>
              {projectDescriptionError && (
                <p className="text-red-500 -mb-16 pb-0">
                  Description should have atleast 10 words
                </p>
              )}
              <textarea
                onChange={hanldeProjectDescription}
                value={projectDescription}
                className={`px-5 py-5 bg-gray-100 focus:shadow-sm focus:outline-none focus:border  rounded-md  ${
                  projectDescriptionError
                    ? "focus:border-red-500"
                    : "focus:border-green-500"
                }`}
                required
                placeholder="Project Description"
              ></textarea>
              <button
                className={`px-3 py-4 font-medium text-white text-lg hover:bg-red-800 duration-75 ${
                  !formsubmitted ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {submmitButtonText}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
