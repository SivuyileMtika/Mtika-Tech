import { motion } from 'motion/react';

export default function About() {

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">Mtika</span> <span className="text-accent">Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Your trusted partner for digital innovation and technology solutions
            </p>
          </motion.div>

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Driving <span className="text-primary">Digital</span> <span className="text-accent">Transformation</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              At Mtika Technologies, we are passionate about helping businesses leverage the power of technology
              to achieve their goals. Our team of experienced developers, designers, and digital strategists work
              collaboratively to deliver solutions that drive real results.
            </p>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              We believe in creating not just functional digital products, but experiences that engage users and
              drive business growth. From concept to deployment, we ensure every project meets the highest standards
              of quality and innovation.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses
              of all sizes, from startups to established enterprises.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-lg p-8 text-center border border-primary/10 hover:border-accent/30 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Our <span className="text-accent">Mission</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To empower businesses with cutting-edge technology solutions that drive growth, enhance user experiences,
              and create lasting value in the digital landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}