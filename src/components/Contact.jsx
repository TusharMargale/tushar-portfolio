import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGlobeAmericas, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const EMAIL_ADDRESS = "tusharmaragale@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Placeholder for actual EmailJS configuration
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')

    // Simulating API call
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      setIsSubmitting(false);
      formRef.current.reset();

      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 min-h-screen flex items-center relative">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new opportunities, enterprise software projects, innovative ideas, and collaboration possibilities. Feel free to reach out and let's create something impactful.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <div className="glass p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">Email</h4>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-white font-medium hover:text-primary transition-colors">
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">Location</h4>
                  <p className="text-white font-medium">Maharashtra, India</p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <FaGlobeAmericas size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">Status</h4>
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      {/* Blinking Ring */}
                      <div className="absolute w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75"></div>

                      {/* Main Dot */}
                      <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>
                    </div>

                    <p className="text-white font-medium">
                      Available for Full-Time Opportunities 🚀
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-3xl flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Sinu Sharma"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="sinusharma@gmail.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-background font-bold rounded-lg hover:bg-emerald-400 transition-colors mt-2 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </button>

              {status && (
                <div className={`p-4 rounded-lg text-center text-sm font-medium ${status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
