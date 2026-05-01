"use client";

import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Brain, Wind, Flower2, MessageCircle, Users } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Mindset Training",
    description:
      "Transform your thinking patterns and develop self-awareness, confidence, and emotional intelligence that empowers your growth.",
  },
  {
    icon: Wind,
    title: "Breathwork",
    description:
      "Learn powerful breathing techniques that reduce stress, increase energy, and bring clarity to your mind and body.",
  },
  {
    icon: Flower2,
    title: "Yoga",
    description:
      "Discover mindful movement that strengthens your body, improves flexibility, and creates a deeper mind-body connection.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description:
      "Develop effective communication skills that enhance your personal and professional relationships.",
  },
  {
    icon: Users,
    title: "Teambuilding",
    description:
      "Build stronger, more authentic relationships and foster meaningful connections in your workplace and personal life.",
  },
];

export function Consulting() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="consulting" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2
            className="text-4xl md:text-5xl mb-4 text-foreground"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Consulting & Professional Development
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            When balanced, self-awareness, confidence and emotional intelligence
            flourish. This naturally extends to how we connect with others,
            enabling us to better communicate, empathize, and build stronger,
            more authentic relationships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-border/50"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3
                  className="text-2xl mb-3 text-foreground"
                  style={{ fontFamily: "Cormorant, serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-secondary/40 rounded-lg p-8 max-w-2xl mx-auto">
            <p
              className="text-foreground font-medium mb-2"
              style={{ fontFamily: "Cormorant, serif", fontSize: "1.25rem" }}
            >
              Individual or Group Sessions
            </p>
            <p
              className="text-muted-foreground text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Customized consulting and professional development sessions based
              on your needs. Reach out to schedule a consultation.
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem" }}
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
