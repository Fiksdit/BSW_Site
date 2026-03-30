import { Button } from "@/components/ui/button"
import {
  Brain,
  Wind,
  MessageCircle,
  Flower2,
  Users,
} from "lucide-react"
import { EditableCalendar } from "@/components/editable-calendar"

const services = [
  {
    icon: Brain,
    title: "Mindset Training",
    description:
      "Transform your thinking patterns and develop self-awareness, confidence, and emotional intelligence that empowers your personal and professional growth. We work together to identify limiting beliefs, reframe negative thoughts, and cultivate mental resilience.",
    features: [
      "Self-awareness development",
      "Confidence building",
      "Emotional intelligence training",
      "Limiting belief identification",
      "Goal setting & visualization",
    ],
  },
  {
    icon: Wind,
    title: "Breathwork",
    description:
      "Discover the power of conscious breathing to reduce stress, increase energy, and bring clarity. Learn various breathing techniques that you can practice anytime, anywhere to create balance in your daily life.",
    features: [
      "Stress reduction techniques",
      "Energizing breath patterns",
      "Mindfulness integration",
      "Daily practice guidance",
      "Relaxation methods",
    ],
  },
  {
    icon: Flower2,
    title: "Yoga",
    description:
      "Reconnect with your body through mindful movement that strengthens, stretches, and revitalizes. Our yoga sessions focus on creating a deeper mind-body connection and sustainable practices that fit your lifestyle.",
    features: [
      "Personalized yoga sessions",
      "Mind-body connection",
      "Flexibility & strength",
      "Stress relief through movement",
      "Adaptable to all levels",
    ],
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description:
      "Develop effective communication skills that enhance your personal and professional relationships. Learn to express yourself authentically, listen with intention, and navigate difficult conversations with confidence.",
    features: [
      "Assertive communication",
      "Active listening skills",
      "Conflict resolution",
      "Professional communication",
      "Boundary setting",
    ],
  },
  {
    icon: Users,
    title: "Teambuilding",
    description:
      "Build stronger, more cohesive teams through activities and workshops designed to improve collaboration, trust, and communication. Create an environment where team members can connect authentically and work together more effectively.",
    features: [
      "Team communication workshops",
      "Trust building exercises",
      "Collaborative problem-solving",
      "Group dynamics improvement",
      "Leadership development",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-balance text-primary-foreground">
              Consulting & Professional Development
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
              Comprehensive wellness services designed to help you achieve balance
              and transformation in every area of your life. Individual or group
              sessions, customized based on your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-semibold">{service.title}</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div
                  className={`p-6 bg-secondary rounded-lg ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    What&apos;s included
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 text-center">
            <div className="p-8 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold">Individual Sessions</h3>
              <p className="mt-2 text-muted-foreground">
                One-on-one personalized coaching tailored to your specific goals and needs.
              </p>
            </div>
            <div className="p-8 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold">Group Sessions</h3>
              <p className="mt-2 text-muted-foreground">
                Workshops and group coaching for teams, organizations, or community groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Schedule a Session
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Use our calendar to plan and manage your wellness sessions.
              Add appointments, set reminders, and keep track of your journey.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <EditableCalendar />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-accent-foreground">
            Ready to begin?
          </h2>
          <p className="mt-4 text-accent-foreground/70 max-w-xl mx-auto leading-relaxed">
            Contact Dr. Nikki Freeman for information and pricing.
            All sessions are customized based on your needs.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90" asChild>
              <a href="mailto:drnpm.freeman@gmail.com">
                Email for Information & Pricing
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
