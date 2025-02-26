import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-4 md:px-6 py-8 md:py-12 overflow-hidden"
    >
      <Card className="shadow-lg rounded-xl p-4 md:p-6 bg-white border border-gray-300 w-full">
        <CardContent>
          <div className="flex flex-col items-center text-center mb-6">
            <FaEnvelope className="text-4xl text-blue-500 mb-3" />
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          </div>
          <p className="text-md text-gray-700 mb-4 leading-relaxed text-center">
            Have any questions or feedback? We'd love to hear from you! Get in touch with us through the following channels:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6">
            <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow w-full text-center">
              <FaPhone className="text-green-500 text-3xl mb-1" />
              <p className="text-gray-700 text-sm">+1 234 567 890</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow w-full text-center">
              <FaEnvelope className="text-red-500 text-3xl mb-1" />
              <p className="text-gray-700 text-sm">support@moviedb.com</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow w-full text-center">
              <FaMapMarkerAlt className="text-purple-500 text-3xl mb-1" />
              <p className="text-gray-700 text-sm">123 Movie St, Hollywood, CA</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="3"
              required
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white p-3 rounded-md flex items-center justify-center hover:bg-blue-600 transition text-md font-semibold"
            >
              <FaPaperPlane className="mr-2" /> Send Message
            </button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactUs;

