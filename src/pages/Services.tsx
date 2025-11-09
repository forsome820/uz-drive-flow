import { motion } from "framer-motion";
import { Truck, Package, Warehouse, BarChart3, Clock, Shield, MapPin, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Full Truckload (FTL)",
      description: "Dedicated trucks for your large shipments with direct delivery from origin to destination.",
      features: ["Point-to-point delivery", "Full truck capacity", "Faster transit times", "Reduced handling"],
    },
    {
      icon: Package,
      title: "Less Than Truckload (LTL)",
      description: "Cost-effective shipping for smaller loads that don't require a full truck.",
      features: ["Shared truck space", "Cost savings", "Flexible scheduling", "Consolidated shipping"],
    },
    {
      icon: Warehouse,
      title: "Warehousing Solutions",
      description: "Secure storage facilities with modern inventory management systems.",
      features: ["Climate-controlled storage", "24/7 security", "Inventory tracking", "Pick and pack services"],
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Time-critical shipments delivered with guaranteed arrival times.",
      features: ["Same-day delivery", "Real-time tracking", "Priority handling", "Door-to-door service"],
    },
    {
      icon: Shield,
      title: "Cargo Insurance",
      description: "Comprehensive insurance coverage for your valuable shipments.",
      features: ["Full value protection", "Claims assistance", "Risk assessment", "Peace of mind"],
    },
    {
      icon: BarChart3,
      title: "Fleet Management",
      description: "Professional fleet management services for businesses with transport needs.",
      features: ["Route optimization", "Fuel management", "Vehicle maintenance", "Driver scheduling"],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Request Quote",
      description: "Contact us with your shipping requirements and get a competitive quote within 24 hours.",
    },
    {
      step: "2",
      title: "Schedule Pickup",
      description: "Choose a convenient pickup time and location. We'll handle all the logistics.",
    },
    {
      step: "3",
      title: "Track Shipment",
      description: "Monitor your cargo in real-time with our advanced tracking system.",
    },
    {
      step: "4",
      title: "Delivery Confirmation",
      description: "Receive confirmation upon successful delivery with electronic proof of delivery.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive logistics solutions designed to meet your unique business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-large transition-smooth group cursor-pointer">
                    <CardContent className="p-6">
                      <motion.div 
                        className="bg-accent rounded-lg p-4 w-fit mb-4"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <Icon className="w-8 h-8 text-accent-foreground" />
                      </motion.div>
                      <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple and streamlined process from quote to delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="relative"
                >
                  <div className="text-center">
                    <motion.div 
                      className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4 shadow-medium"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                      animate={{
                        boxShadow: [
                          "0 4px 20px hsl(var(--primary) / 0.12)",
                          "0 8px 30px hsl(var(--primary) / 0.25)",
                          "0 4px 20px hsl(var(--primary) / 0.12)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    >
                      {item.step}
                    </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center"
            >
              <motion.div 
                className="bg-accent rounded-full p-6 w-fit mx-auto mb-4"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <MapPin className="w-8 h-8 text-accent-foreground" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your shipments 24/7 with our advanced GPS tracking system
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center"
            >
              <motion.div 
                className="bg-accent rounded-full p-6 w-fit mx-auto mb-4"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <Headphones className="w-8 h-8 text-accent-foreground" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our customer service team is always available to assist you
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center"
            >
              <motion.div 
                className="bg-accent rounded-full p-6 w-fit mx-auto mb-4"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <Shield className="w-8 h-8 text-accent-foreground" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Secure & Insured</h3>
              <p className="text-muted-foreground">
                All shipments are fully insured and handled with maximum security
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a free quote and experience the difference of professional logistics services
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8">
                Request a Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
