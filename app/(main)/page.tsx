import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Wind, MessageCircle, Flower2, Users } from "lucide-react"

const features = [
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
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-balance text-primary-foreground">
              Create Balance. Transform Your Life.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
              Balancing our physical, mental and emotional state to enhance personal
              and professional growth, relationships and environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90" asChild>
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Consulting & Professional Development
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When balanced, self-awareness, confidence and emotional intelligence flourish.
              This naturally extends to how we connect with others, enabling us to better
              communicate, empathize, and build stronger, more authentic relationships.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative p-8 border border-border rounded-lg hover:border-foreground/20 transition-colors"
              >
                <feature.icon className="h-8 w-8 text-foreground" />
                <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Individual or Group Sessions - Customized based on client needs
            </p>
            <Button variant="outline" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to begin your wellness journey?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Take the first step toward a more balanced life. Reach out to schedule
            a consultation and discover how we can support your transformation.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <a href="mailto:drnpm.freeman@gmail.com">
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
