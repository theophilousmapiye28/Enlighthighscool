"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import fb from "@/public/icons/facebook.svg";
import WA from "@/public/icons/logos--whatsapp-icon (1).svg";
import GE from "@/public/icons/bi--geo-fill (1).svg";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setNotification(null);

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "833c9587-86da-471c-8aec-f08968d850a5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setNotification("Success! Your message has been sent.");
        (event.target as HTMLFormElement).reset();
      } else {
        setNotification("Error! Please try again.");
      }
    } catch (error) {
      console.error(error);  // Logs the error to the console
      setNotification("Error! Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center" id="contact">
      <div className="flex flex-wrap justify-evenly px-5 w-full">
        {/* Contact Information Section */}
        <motion.div
          className="flex flex-col space-y-3 w-full md:w-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.a
            className="flex flex-row gap-x-6 text-blue-950   font-bold items-center justify-start space-x-4 text-2xl p-5"
            href="tel:+263785651863"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <Image className="h-14 w-14 border-2 font-bold p-2 border-blue-950 rounded-full" src={fb} alt="Facebook" />
            Enlight High School
          </motion.a>

          <motion.a
            className="flex flex-row items-center text-blue-950  font-bold gap-x-6 justify-start space-x-4 text-2xl p-5"
            href="tel:+263785651863"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <Image className="h-14 w-14 border-2 p-2 font-bold border-blue-950 rounded-full" src={WA} alt="WhatsApp" />
            +263 77 304 8117
          </motion.a>

          <motion.a
            className="flex flex-row gap-x-6 font-bold text-blue-950 items-center justify-start space-x-4 text-2xl p-5"
            href="tel:+263785651863"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false }}
          >
            <Image className="h-14 w-14 border-2 p-2 border-blue-950 rounded-full" src={GE} alt="Location" />
            Kuwadzana Formerly West View Clinic
          </motion.a>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="drop-shadow-2xl shadow-blue-900 w-full md:w-[50%]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <div className="form w-full border p-6 md:w-auto">
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false }}
            >
              <input
                className="h-[8vh] w-full p-3 bg-gray-100 text-blue-900 border-2 border-blue-900 rounded-lg m-2"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <input
                  className="h-[8vh] w-full sm:w-[48%] p-3 bg-gray-100 text-blue-900 border-2 border-blue-900 rounded-lg m-2"
                  type="text"
                  name="number"
                  placeholder="Phone Number"
                  required
                />
                <input
                  className="h-[8vh] w-full sm:w-[48%] p-3 bg-gray-100 text-blue-900 border-2 border-blue-900 rounded-lg m-2"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <textarea
                className="h-[30vh] w-full p-3 bg-gray-100 text-blue-900 border-2 border-blue-900 rounded-lg m-2"
                name="message"
                placeholder="Message"
                required
              ></textarea>

              <motion.button
                className="bg-blue-950 text-white rounded-md p-2 w-full sm:w-[20vh] active:scale-[.98] hover:scale-[1.01] transition-all"
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? "Please wait..." : "Submit"}
              </motion.button>
            </motion.form>

            {/* Notification */}
            {notification && (
              <motion.p
                className={`mt-4 ${notification.startsWith("Success") ? "text-green-500" : "text-red-500"}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
              >
                {notification}
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
