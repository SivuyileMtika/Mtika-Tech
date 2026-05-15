import { motion } from 'motion/react';
const mtikaLogo = '/logo.png';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-background z-[100] overflow-hidden"
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
      {/* Full-screen centering wrapper */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Sized container — rings position relative to this */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: 'min(480px, 95vw)', height: 'min(480px, 95vw)' }}
        >
          {/* Inner ring */}
          <motion.div
            className="absolute inset-0 m-auto border-4 border-primary/30 rounded-full"
            style={{ width: 'min(400px, 80vw)', height: 'min(400px, 80vw)' }}
            animate={{ scale: [1, 1.2, 1], rotate: 360, opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
          />
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 m-auto border-4 border-accent/30 rounded-full"
            style={{ width: 'min(480px, 95vw)', height: 'min(480px, 95vw)' }}
            animate={{ scale: [1.2, 1, 1.2], rotate: -360, opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
          />
          {/* Logo */}
          <motion.img
            src={mtikaLogo}
            alt="Mtika Technologies"
            className="relative z-10 h-24 w-auto sm:h-36 md:h-48"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
