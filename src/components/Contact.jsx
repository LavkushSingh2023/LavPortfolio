import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useState } from "react";
import { FiSend, FiCheckCircle, FiAlertCircle, FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const [status, setStatus] = useState(null);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          values,
          import.meta.env.VITE_EMAILJS_USER_ID
        );
        setStatus("success");
        resetForm();
      } catch (error) {
        setStatus("error");
      }
    },
  });

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Feel free to reach out for collaborations, job opportunities, or just a chat!
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-3 justify-center md:justify-start text-gray-800 dark:text-gray-300">
              <FiMail className="text-blue-500" /> singh.lavkush2023@gmail.com
            </p>
            <p className="flex items-center gap-3 justify-center md:justify-start text-gray-800 dark:text-gray-300">
              <FiPhone className="text-blue-500" /> +91 930 518 7061
            </p>
            <div className="flex gap-6 justify-center md:justify-start mt-4">
              <a href="https://github.com/LavkushSingh2023" className="text-gray-800 dark:text-gray-300 hover:text-blue-500 transition">
                <FiGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/lavkushsingh2023" className="text-gray-800 dark:text-gray-300 hover:text-blue-500 transition">
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
            Send a Message
          </h3>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <input
                name="name"
                placeholder="Your Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                onChange={formik.handleChange}
                value={formik.values.message}
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-500 text-white py-4 rounded-lg hover:opacity-90 hover:cursor-pointer transition-opacity flex items-center justify-center gap-2"
            >
              {formik.isSubmitting ? (
                <>
                  <FiSend className="animate-pulse" /> Sending...
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 text-green-500 text-center mt-4">
                <FiCheckCircle /> Message sent successfully!
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-500 text-center mt-4">
                <FiAlertCircle /> Failed to send. Please try again.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
