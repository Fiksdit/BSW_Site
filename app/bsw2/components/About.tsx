"use client";

import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-6 text-foreground"
              style={{ fontFamily: "Cormorant, serif" }}
            >
              About Balanced State Wellness
            </h2>
            <p
              className="text-lg text-muted-foreground mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Balancing our physical, mental and emotional state to enhance
              personal and professional growth, relationships and environment.
            </p>
            <p
              className="text-lg text-muted-foreground mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We believe wellness is for everyone. Our experienced instructor and
              welcoming community create the perfect environment for personal
              transformation through yoga, mindfulness, and holistic wellness
              practices.
            </p>

            <div className="mt-8 mb-8">
              <h3
                className="text-2xl mb-4 text-foreground"
                style={{ fontFamily: "Cormorant, serif" }}
              >
                Services Offered
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p
                    className="text-foreground"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Mindset Training
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p
                    className="text-foreground"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Communication
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p
                    className="text-foreground"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Breathwork
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p
                    className="text-foreground"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Yoga
                  </p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4 col-span-2">
                  <p
                    className="text-foreground"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Teambuilding
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <p
                className="text-sm text-muted-foreground italic mb-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                &ldquo;When balanced, self-awareness, confidence and emotional
                intelligence flourish. This naturally extends to how we connect
                with others, enabling us to better communicate, empathize, and
                build stronger, more authentic relationships.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-card rounded-lg shadow-xl p-8 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bizcard.png"
                alt="Balanced State Wellness Business Card"
                className="w-full h-auto"
              />
            </div>

            <div className="bg-card rounded-lg shadow-xl p-8">
              <h3
                className="text-2xl mb-6 text-foreground text-center"
                style={{ fontFamily: "Cormorant, serif" }}
              >
                Your Instructor
              </h3>

              {/* Angled photos flanking the instructor info */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={isInView ? { opacity: 1, rotate: -3 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-shrink-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/Nikki_Freeman_plants40.jpg"
                    alt="Dr. Nikki Freeman"
                    className="w-28 h-36 sm:w-36 sm:h-44 object-cover rounded-lg shadow-lg border-4 border-secondary"
                  />
                </motion.div>

                <div className="text-center flex-shrink-0">
                  <h4
                    className="text-xl mb-2 text-primary"
                    style={{ fontFamily: "Cormorant, serif" }}
                  >
                    Dr. Nikki Freeman, Ed.D.
                  </h4>
                  <div
                    className="space-y-1 text-muted-foreground text-sm"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <p>Professor of Communication</p>
                    <p>Enlifted Coach</p>
                    <p>YTT 200</p>
                    <p>Zen Barre Certified</p>
                    <p>Pilates Certified</p>
                    <p>CF L-1 Certified</p>
                    <p>Enlifted L-2 Certified</p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={isInView ? { opacity: 1, rotate: 3 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-shrink-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/Nikki_Freeman_yoga40.jpg"
                    alt="Dr. Nikki Freeman teaching yoga"
                    className="w-28 h-36 sm:w-36 sm:h-44 object-cover rounded-lg shadow-lg border-4 border-accent"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
