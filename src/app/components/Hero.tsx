import { ArrowRight, Code, Palette, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-background via-secondary/30 to-accent/5 relative overflow-hidden">
      {/* Blurred Background Logo */}
      <div
        className="absolute inset-0 opacity-5 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/logo.png')",
          filter: 'blur(20px) brightness(0.8)',
          transform: 'scale(1.5)',
          zIndex: 0
        }}
      />
      
      {/* Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            variants={itemVariants}
          >
            Transforming Ideas Into
            <span className="text-primary"> Digital </span>
            <span className="text-accent">Reality</span>
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            At Mtika Technologies, we specialize in creating stunning websites, custom POS systems,
            and innovative digital solutions that help your business thrive in the digital landscape.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(31, 95, 153, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-xl"
              >
                Contact Us
                <motion.div
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, type: "tween", ease: "easeInOut" }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(34, 165, 90, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                onClick={scrollToServices}
                className="text-lg px-8 py-6 border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
              >
                View Our Services
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col items-center text-center group cursor-pointer"
              variants={featureVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-full mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 border border-primary/10 group-hover:border-accent/30"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Code className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                Web Development
              </h3>
              <p className="text-muted-foreground">
                Custom websites and web applications built with modern technologies
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center group cursor-pointer"
              variants={featureVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-full mb-4 group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-300 border border-accent/10 group-hover:border-primary/30"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Palette className="h-8 w-8 text-accent group-hover:text-primary transition-colors duration-300" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                Logo Design
              </h3>
              <p className="text-muted-foreground">
                Professional logo designs that capture your brand's essence
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center group cursor-pointer"
              variants={featureVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-full mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 border border-primary/10 group-hover:border-accent/30"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <ShoppingCart className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                POS Systems
              </h3>
              <p className="text-muted-foreground">
                Custom Point of Sale systems with inventory and sales management
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}