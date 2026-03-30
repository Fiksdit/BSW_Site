import Link from "next/link"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Balanced State Wellness LLC"
                width={120}
                height={120}
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Create Balance. Transform Your Life.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Balanced State Wellness LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
