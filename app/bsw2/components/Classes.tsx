"use client";

import { ImageWithFallback } from "./ImageWithFallback";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const classes = [
  {
    id: 1,
    name: "Hatha Yoga",
    description:
      "A gentle practice focusing on alignment, breathing techniques, and foundational postures",
    image:
      "https://images.unsplash.com/photo-1758274539654-23fa349cc090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMG1lZGl0YXRpbmclMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzQ4OTc2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "60 min",
    level: "All Levels",
  },
  {
    id: 2,
    name: "Slow Flow to Yin/Mobility",
    description:
      "Gentle flowing sequences transitioning into deep stretch poses for flexibility and relaxation",
    image:
      "https://images.unsplash.com/photo-1758274525981-05497b2c5b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwY2xhc3MlMjBncm91cCUyMGNhbG18ZW58MXx8fHwxNzc0ODk5MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "75 min",
    level: "All Levels",
  },
  {
    id: 3,
    name: "Hot Yoga",
    description:
      "Energizing practice in a heated room to deepen stretches and detoxify",
    image:
      "https://images.unsplash.com/photo-1631441961409-d350ca05f453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBtZWRpdGF0aW9uJTIwc3RvbmVzfGVufDF8fHx8MTc3NDg0ODM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "60 min",
    level: "Intermediate",
  },
  {
    id: 4,
    name: "Full Body Burn",
    description:
      "Dynamic strength-building practice combining yoga flows with toning exercises",
    image:
      "https://images.unsplash.com/photo-1758274535024-be3faa30f507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nfGVufDF8fHx8MTc3NDgyNTI2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "60 min",
    level: "Intermediate",
  },
  {
    id: 5,
    name: "Sculpt",
    description:
      "Pilates-inspired movements combined with yoga postures for strength and flexibility",
    image:
      "https://images.unsplash.com/photo-1767605565789-5b18cdbbf6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMHlvZ2ElMjBzdHVkaW8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ4ODc3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "60 min",
    level: "All Levels",
  },
  {
    id: 6,
    name: "Reformer Pilates",
    description:
      "Equipment-based Pilates focusing on core strength, alignment, and controlled movement",
    image:
      "https://images.unsplash.com/photo-1758274539654-23fa349cc090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMG1lZGl0YXRpbmclMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzQ4OTc2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "50 min",
    level: "All Levels",
  },
];

export function Classes() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="classes" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
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
            Our Classes
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Choose from a variety of yoga and wellness classes to suit your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((yogaClass, index) => (
            <motion.div
              key={yogaClass.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={yogaClass.image}
                  alt={yogaClass.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-2xl mb-2 text-foreground"
                  style={{ fontFamily: "Cormorant, serif" }}
                >
                  {yogaClass.name}
                </h3>
                <p
                  className="text-muted-foreground mb-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {yogaClass.description}
                </p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{yogaClass.duration}</span>
                  <span className="px-3 py-1 bg-secondary rounded-full">
                    {yogaClass.level}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
