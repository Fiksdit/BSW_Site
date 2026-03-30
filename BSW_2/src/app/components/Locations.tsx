import { MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const locations = [
  {
    name: 'Pilates RFMR Club, Sedalia',
    address: 'Sedalia, MO',
    website: 'https://rfmrpilatessedalia.com/',
    pricing: 'Drop in or Class Packages Available',
    classes: ['Sculpt', 'Hot Yoga', 'Reformer Pilates'],
  },
  {
    name: 'CrossFit Believe YoGA, Warrensburg',
    address: 'Warrensburg, MO',
    website: 'https://crossfitbelieve.wodify.com',
    pricing: '$10/month unlimited access to Yoga classes',
    classes: ['Slow Flow to Yin/Mobility'],
  },
  {
    name: 'The Kure, Warrensburg',
    address: 'Warrensburg, MO',
    website: 'https://www.thekurestudio.com/memberships',
    pricing: 'Drop in or Class Packages Available',
    classes: ['Full Body Burn', 'Hatha Yoga'],
  },
  {
    name: 'Heckart Community Center, Sedalia',
    address: 'Sedalia, MO',
    website: 'https://www.sedaliaparks.com/activities/fitness/',
    pricing: 'Daily Fee or Fit Passes Available',
    classes: ['Strength & Sculpt', 'Slow Flow to Yin/Mobility'],
  },
];

export function Locations() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="locations" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
            Class Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            We offer classes at multiple locations throughout Sedalia and Warrensburg
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className="p-2 bg-secondary rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-1 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
                    {location.name}
                  </h3>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {location.address}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm mb-2 text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <strong>Pricing:</strong> {location.pricing}
                </p>
                <a
                  href={location.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span>Visit Website</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-sm mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                  Classes Offered:
                </p>
                <div className="flex flex-wrap gap-2">
                  {location.classes.map((className) => (
                    <span
                      key={className}
                      className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {className}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
