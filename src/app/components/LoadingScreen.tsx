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
      {/* Rings — absolutely centered relative to the full-screen overlay */}
      <motion.div
        className="absolute border-4 border-primary/30 rounded-full"
        style={{
          width: 'min(400px, 80vw)',
          height: 'min(400px, 80vw)',
          top: '50%',
          left: '50%',
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ scale: [1, 1.2, 1], rotate: 360, opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
      />
      <motion.div
        className="absolute border-4 border-accent/30 rounded-full"
        style={{
          width: 'min(480px, 95vw)',
          height: 'min(480px, 95vw)',
          top: '50%',
          left: '50%',
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ scale: [1.2, 1, 1.2], rotate: -360, opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
      />

      {/* Logo — centered with flex on the full overlay */}
      <div className="w-full h-full flex items-center justify-center">
        <motion.img
          src={mtikaLogo}
          alt="Mtika Technologies"
          className="h-24 w-auto sm:h-36 md:h-48 relative z-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}
