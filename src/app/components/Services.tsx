import { Code, Palette, Smartphone, Globe, Settings, Zap, ArrowRight, Bot, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Website Development",
    description: "Custom websites built with modern technologies like React, Next.js, and responsive design principles.",
    features: ["Responsive Design", "SEO Optimization", "Fast Performance", "Content Management"],
    price: "Starting from R8,000",
    color: "primary"
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Logo Design",
    description: "Professional logo design that captures your brand identity and makes a lasting impression.",
    features: ["Brand Analysis", "Multiple Concepts", "Vector Files", "Brand Guidelines"],
    price: "Starting from R500",
    color: "accent"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    features: ["Cross-Platform", "Native Performance", "App Store Deployment", "Maintenance"],
    price: "Starting from R12,000",
    color: "primary"
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "POS Systems Development",
    description: "Custom Point of Sale systems with inventory management, sales tracking, and reporting features.",
    features: ["Inventory Management", "Sales Tracking", "Receipt Printing", "Multi-User Support"],
    price: "Starting from R9,000",
    color: "accent"
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "AI Automation",
    description: "Build AI automation systems for businesses to streamline operations and increase efficiency.",
    features: ["Workflow Automation", "AI Integration", "Process Efficiency", "Custom Solutions"],
    price: "Starting from R15,000",
    color: "primary"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Website Maintenance",
    description: "Ongoing website maintenance, updates, and technical support services.",
    features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "24/7 Support"],
    price: "Starting from R500 - R1,000/month",
    color: "accent"
  }
];

export default function Services() {
  const enquireAboutService = (serviceTitle: string) => {
    const subject = `Enquiry: ${serviceTitle}`;
    const body = `Hello Mtika Technologies,\n\nI am interested in your ${serviceTitle} service and would like to learn more.\n\nPlease get back to me at your earliest convenience.\n\nThank you.`;
    window.location.href = `mailto:mtikatech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed online
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: service.color === 'primary'
                  ? '0 20px 60px rgba(31, 95, 153, 0.3)'
                  : '0 20px 60px rgba(34, 165, 90, 0.3)',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-accent/30 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className={`bg-gradient-to-br ${
                      service.color === 'primary'
                        ? 'from-primary/10 to-accent/5 group-hover:from-primary/20 group-hover:to-accent/10'
                        : 'from-accent/10 to-primary/5 group-hover:from-accent/20 group-hover:to-primary/10'
                    } p-3 rounded-full transition-all duration-300 border ${
                      service.color === 'primary'
                        ? 'border-primary/10 group-hover:border-accent/20'
                        : 'border-accent/10 group-hover:border-primary/20'
                    }`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className={
                        service.color === 'primary'
                          ? 'text-primary group-hover:text-accent transition-colors duration-300'
                          : 'text-accent group-hover:text-primary transition-colors duration-300'
                      }
                    >
                      {service.icon}
                    </div>
                  </motion.div>
                  <motion.div
                    className={`text-sm font-semibold ${
                      service.color === 'primary' ? 'text-primary bg-primary/10' : 'text-accent bg-accent/10'
                    } px-3 py-1 rounded-full`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {service.price}
                  </motion.div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <ArrowRight
                        className={`h-4 w-4 mr-2 ${
                          service.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={() => enquireAboutService(service.title)}
                    variant="outline"
                    className={`w-full transition-all duration-300 ${
                      service.color === 'primary'
                        ? 'border-primary/20 hover:bg-primary hover:text-primary-foreground group-hover:border-primary'
                        : 'border-accent/20 hover:bg-accent hover:text-accent-foreground group-hover:border-accent'
                    }`}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}