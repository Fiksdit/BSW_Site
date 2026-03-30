import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, GraduationCap, Award, Heart } from "lucide-react"

const values = [
  {
    number: "01",
    title: "Holistic Wellness",
    description:
      "We address the whole person - mind, body, and spirit - recognizing that true wellness comes from balance in all areas of life.",
  },
  {
    number: "02",
    title: "Compassionate Guidance",
    description:
      "We meet you where you are with understanding, patience, and genuine care for your well-being and growth.",
  },
  {
    number: "03",
    title: "Empowerment",
    description:
      "We believe in giving you the tools and knowledge to continue your wellness journey independently and confidently.",
  },
  {
    number: "04",
    title: "Connection",
    description:
      "We foster meaningful connections - with yourself, with others, and with the world around you.",
  },
]

const credentials = [
  {
    icon: GraduationCap,
    title: "Professor of Communication",
    description: "Academic expertise in interpersonal and professional communication.",
  },
  {
    icon: Award,
    title: "Enlifted Coach",
    description: "Certified coach specializing in transformational life coaching.",
  },
  {
    icon: Heart,
    title: "YTT 200",
    description: "200-hour certified yoga teacher training for mind-body wellness.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-balance text-primary-foreground">
              About Balanced State Wellness
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
              Balancing our physical, mental and emotional state to enhance personal
              and professional growth, relationships and environment.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Dr. Nikki Freeman, Ed.D.
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Founder, Balanced State Wellness LLC
              </p>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Balanced State Wellness was founded by Dr. Nikki Freeman with a deep
                  passion for helping others find harmony in their lives. With expertise
                  spanning communication, coaching, and yoga instruction, Dr. Freeman
                  brings a unique and comprehensive approach to wellness.
                </p>
                <p>
                  When balanced, self-awareness, confidence and emotional intelligence
                  flourish. This naturally extends to how we connect with others, enabling
                  us to better communicate, empathize, and build stronger, more authentic
                  relationships.
                </p>
                <p>
                  Our approach combines professional development with personal wellness,
                  offering consulting services in Mindset Training, Communication,
                  Breathwork, Yoga, and Teambuilding - all customized to meet your
                  individual or group needs.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <a href="mailto:drnpm.freeman@gmail.com">
                    Contact Dr. Freeman
                  </a>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Credentials & Certifications</h3>
              {credentials.map((credential) => (
                <div
                  key={credential.title}
                  className="flex gap-4 p-6 border border-border rounded-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <credential.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{credential.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              These principles guide our practice and shape how we support
              your wellness journey.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.number} className="flex gap-6">
                <div className="text-4xl font-light text-muted-foreground/50">
                  {value.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to create balance?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Discover our services and find the support you need for your wellness journey.
            Individual and group sessions available.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
