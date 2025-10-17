// src/pages/ContactPage.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    // Here you can integrate with backend or email API
    console.log("Form submitted:", formData);
    setStatus("Your message has been sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen bg-green-50">
      <Navbar />

      <main className="md:ml-64 mt-16 px-6 py-12">
        <h1 className="text-4xl font-extrabold text-green-900 mb-8 text-center">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="border rounded-lg px-4 py-2 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-700 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-green-700">{status}</p>}
          </div>

          {/* Contact Info + Map */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold text-green-900 mb-4">
                Our Contact Info
              </h2>
              <p className="text-green-700 mb-2">
                📍 Address: 123 AgroFert Lane, Indore, India
              </p>
              <p className="text-green-700 mb-2">📞 Phone: +91 ***** **888</p>
              <p className="text-green-700 mb-2">✉️ Email: info@agrofert.com</p>
              <p className="text-green-700">🌐 Website: www.agrofert.com</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <iframe
                title="AgroFert Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14673.506230276773!2d75.8540!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e63f3f8e6d7d%3A0x8a50c2ec9b0f2f33!2sIndore%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1697495674632!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
