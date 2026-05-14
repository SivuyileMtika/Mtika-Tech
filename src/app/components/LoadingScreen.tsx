import { motion } from 'motion/react';
import mtikaLogo from 'figma:asset/1ad0f5179549d95264af1d200fd4625def5dae85.png';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-background z-[100] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => {
        const element = document.getElementById('loading-screen');
        if (element) {
          element.style.display = 'none';
        }
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* Animated rings around logo */}
        <motion.div
          className="absolute border-4 border-primary/30 rounded-full"
          style={{ width: '400px', height: '400px' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: 360,
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
        />
        <motion.div
          className="absolute border-4 border-accent/30 rounded-full"
          style={{ width: '480px', height: '480px' }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: -360,
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
        />

        {/* Logo - Enlarged */}
        <motion.img
          src={mtikaLogo}
          alt="Mtika Technologies"
          className="h-48 w-auto relative z-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}
