import { motion } from 'motion/react';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 5,
}));

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles — reduced to 20, no blur */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-primary/30 to-accent/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
            type: 'tween',
          }}
        />
      ))}

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary/5 blur-3xl"
        style={{ willChange: 'transform, opacity' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-accent/5 blur-3xl"
        style={{ willChange: 'transform, opacity' }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
      />

      {/* Digital Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
        <motion.path
          d="M 0 100 L 200 100 L 200 300 L 400 300"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.path
          d="M 100% 200 L 80% 200 L 80% 400 L 60% 400"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-accent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, repeatDelay: 2 }}
        />
      </svg>
    </div>
  );
}
