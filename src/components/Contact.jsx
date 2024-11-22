import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = ({ textEnter, textLeave }) => {
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [contactMethod, setContactMethod] = useState("form");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!form.user_name || !form.user_email || !form.message) {
      alert("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    // Simulating email send (replace with actual email sending logic)
    setTimeout(() => {
      alert("Message sent successfully!");
      setForm({ user_name: "", user_email: "", message: "" });
      setIsLoading(false);
    }, 2000);
  };

  const openWhatsApp = () => {
    const phoneNumber = "9958493207";
    const message = encodeURIComponent("Hello! I'm interested in your services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-[#0c2421] mt-[50vw] md:mt-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center"
          variants={itemVariants}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            variants={textVariants}
          >
            {"Ready to Elevate Your Marketing Strategy?".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                transition={{ delay: index * 0.05 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-gray-400"
            variants={itemVariants}
          >
            Let's discuss how we can help you achieve your business goals through expert digital marketing and copywriting services.
          </motion.p>
        </motion.div>
        {isMobile && (
          <motion.div
            className="flex space-x-4 mb-6 justify-center mt-8"
            variants={itemVariants}
          >
            <button
              onClick={() => setContactMethod("form")}
              className={`flex items-center text-sm px-4 py-2 rounded ${
                contactMethod === "form" ? "bg-[#c5f82a] text-[#0a1f1c]" : "bg-transparent text-white border border-[#c5f82a]"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Contact Form
            </button>
            <button
              onClick={() => setContactMethod("whatsapp")}
              className={`flex items-center text-sm px-4 py-2 rounded ${
                contactMethod === "whatsapp" ? "bg-[#c5f82a] text-[#0a1f1c]" : "bg-transparent text-white border border-[#c5f82a]"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              WhatsApp
            </button>
          </motion.div>
        )}
        <motion.div className="w-full max-w-sm mx-auto space-y-2" variants={itemVariants}>
          <AnimatePresence mode="wait">
            {(!isMobile || contactMethod === "form") && (
              <motion.form
                key="form"
                onSubmit={sendEmail}
                className="flex flex-col space-y-4 w-full max-w-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <motion.input
                  id="user_name"
                  type="text"
                  name="user_name"
                  value={form.user_name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="px-4 py-2 bg-[#0a1f1c] border border-[#c5f82a]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5f82a] text-white text-sm sm:text-base"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.05 }}
                />
                <motion.input
                  id="user_email"
                  type="email"
                  name="user_email"
                  value={form.user_email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="px-4 py-2 bg-[#0a1f1c] border border-[#c5f82a]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5f82a] text-white text-sm sm:text-base"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.05 }}
                />
                <motion.textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={4}
                  required
                  className="px-4 py-2 bg-[#0a1f1c] border border-[#c5f82a]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5f82a] text-white resize-none text-sm sm:text-base"
                  variants={itemVariants}
                  whileFocus={{ scale: 1.05 }}
                />
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    className="w-full bg-[#c5f82a] hover:bg-[#d4ff3a] text-[#0a1f1c] transition-colors text-sm sm:text-base px-6 py-3 rounded-md font-semibold"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Schedule a Consultation
                        <motion.span
                          className="ml-2 inline-block"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
                  </button>
                </motion.div>
              </motion.form>
            )}
            {isMobile && contactMethod === "whatsapp" && (
              <motion.div
                key="whatsapp"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white transition-colors text-sm sm:text-base px-6 py-3 rounded-md font-semibold"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  Chat on WhatsApp
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;

