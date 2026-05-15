import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Website Enquiry from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : '',
      '',
      formData.message,
    ].filter(Boolean).join('\n');

    window.location.href = `mailto:mtikatech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast.success("Opening your email client...");

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
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
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your next project? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className="border-primary/10 hover:border-accent/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Send Us a <span className="text-accent">Message</span></CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="border-primary/20 focus:border-accent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="border-primary/20 focus:border-accent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="border-primary/20 focus:border-accent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="border-primary/20 focus:border-accent"
                      />
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className="border-primary/10 hover:border-accent/20 transition-all duration-300">
                  <CardHeader>
                    <CardTitle>
                      Contact <span className="text-accent">Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <motion.div
                      className="flex items-center group cursor-pointer"
                      whileHover={{ x: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <motion.div
                        className="bg-gradient-to-br from-primary/10 to-accent/10 p-3 rounded-full mr-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 border border-primary/10 group-hover:border-accent/20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Mail className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                      </motion.div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">mtikatech@gmail.com</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center group cursor-pointer"
                      whileHover={{ x: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <motion.div
                        className="bg-gradient-to-br from-accent/10 to-primary/10 p-3 rounded-full mr-4 group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-300 border border-accent/10 group-hover:border-primary/20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Phone className="h-5 w-5 text-accent group-hover:text-primary transition-colors" />
                      </motion.div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-muted-foreground">0799022002</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center group cursor-pointer"
                      whileHover={{ x: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <motion.div
                        className="bg-gradient-to-br from-primary/10 to-accent/10 p-3 rounded-full mr-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 border border-primary/10 group-hover:border-accent/20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <MessageCircle className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                      </motion.div>
                      <div>
                        <p className="font-medium text-foreground">WhatsApp</p>
                        <p className="text-muted-foreground">0716410858</p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Card className="border-accent/10 hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Business <span className="text-primary">Hours</span></CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-foreground">Monday - Friday</span>
                      <span className="text-muted-foreground">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Saturday</span>
                      <span className="text-muted-foreground">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}