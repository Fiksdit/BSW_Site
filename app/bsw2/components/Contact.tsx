"use client";

import { Mail, Facebook } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4 text-foreground"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Get In Touch
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Have questions or want to learn more? We&apos;d love to hear from
            you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-secondary rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3
                  className="mb-2 text-foreground"
                  style={{ fontFamily: "Cormorant, serif" }}
                >
                  Email
                </h3>
                <p
                  className="text-muted-foreground mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  For more information and pricing:
                </p>
                <a
                  href="mailto:drnpmfreeman@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  drnpmfreeman@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-secondary rounded-lg">
                <Facebook className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3
                  className="mb-2 text-foreground"
                  style={{ fontFamily: "Cormorant, serif" }}
                >
                  Join Our Community
                </h3>
                <p
                  className="text-muted-foreground mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Stay updated on classes and events:
                </p>
                <p
                  className="text-primary"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Sedalia Yoga & Wellness Community Facebook Group
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3
                className="text-xl mb-3 text-foreground"
                style={{ fontFamily: "Cormorant, serif" }}
              >
                Individual or Group Sessions
              </h3>
              <p
                className="text-muted-foreground mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Customized consulting and professional development sessions
                available based on your needs:
              </p>
              <ul
                className="space-y-2 text-muted-foreground"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <li>&#8226; Mindset Training</li>
                <li>&#8226; Communication Skills</li>
                <li>&#8226; Breathwork Sessions</li>
                <li>&#8226; Private Yoga Classes</li>
                <li>&#8226; Teambuilding Workshops</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-lg shadow-lg p-8"
          >
            <h3
              className="text-2xl mb-6 text-foreground"
              style={{ fontFamily: "Cormorant, serif" }}
            >
              Send us a message
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="bsw2-name"
                  className="block text-sm mb-2 text-foreground"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="bsw2-name"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>
              <div>
                <label
                  htmlFor="bsw2-email"
                  className="block text-sm mb-2 text-foreground"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="bsw2-email"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>
              <div>
                <label
                  htmlFor="bsw2-subject"
                  className="block text-sm mb-2 text-foreground"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Subject
                </label>
                <select
                  id="bsw2-subject"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <option>General Inquiry</option>
                  <option>Class Information</option>
                  <option>Private Session</option>
                  <option>Group Workshop</option>
                  <option>Consulting Services</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="bsw2-message"
                  className="block text-sm mb-2 text-foreground"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  id="bsw2-message"
                  rows={4}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
