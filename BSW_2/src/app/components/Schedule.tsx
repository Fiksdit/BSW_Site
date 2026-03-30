import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const schedule = [
  {
    day: 'Monday',
    classes: [
      { time: '6:30 AM', name: 'Sculpt', location: 'Pilates RFMR Club, Sedalia' },
      { time: '5:30 PM', name: 'Hot Yoga', location: 'Pilates RFMR Club, Sedalia' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '8:30 AM', name: 'Full Body Burn', location: 'The Kure, Warrensburg' },
      { time: '9:30 AM', name: 'Hatha Yoga', location: 'The Kure, Warrensburg' },
      { time: '6:30 PM', name: 'Slow Flow to Yin/Mobility', location: 'CrossFit Believe, Warrensburg' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '—', name: 'No Classes', location: 'Rest Day' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { time: '5:00 AM', name: 'Reformer Pilates', location: 'Pilates RFMR Club, Sedalia' },
      { time: '9:00 AM', name: 'Sculpt', location: 'Pilates RFMR Club, Sedalia' },
      { time: '4:30 PM', name: 'Strength & Sculpt', location: 'Heckart Center, Sedalia' },
      { time: '5:30 PM', name: 'Slow Flow to Yin/Mobility', location: 'Heckart Center, Sedalia' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { time: '—', name: 'No Classes', location: 'Rest Day' },
    ],
  },
  {
    day: 'Weekend',
    classes: [
      { time: 'Varies', name: 'Occasional Classes', location: 'Pilates RFMR Club or CrossFit Believe' },
    ],
  },
];

export function Schedule() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="schedule" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground" style={{ fontFamily: 'Cormorant, serif' }}>
            Weekly Class Schedule
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            All classes are taught by Dr. Nikki Freeman and are open to all ability and experience levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl mb-4 text-primary border-b border-border pb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                {day.day}
              </h3>
              <div className="space-y-4">
                {day.classes.map((yogaClass, classIndex) => (
                  <div key={classIndex} className="border-l-2 border-accent pl-3">
                    <div className="text-sm text-muted-foreground mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {yogaClass.time}
                    </div>
                    <div className="mb-1" style={{ fontFamily: 'Cormorant, serif' }}>
                      {yogaClass.name}
                    </div>
                    <div className="text-sm text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {yogaClass.location}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-accent/30 rounded-lg p-6 text-center"
        >
          <p className="text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
            <strong>Note:</strong> Schedule subject to change. Join the Sedalia Yoga & Wellness Community Facebook Group for updates and occasional Saturday/Sunday classes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
