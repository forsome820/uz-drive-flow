import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Package, Clock, Shield, TrendingUp, MapPin, Users, Truck, Box, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroTruck from "@/assets/hero-truck.jpg";
import mapUzbekistan from "@/assets/map-uzbekistan.jpg";
import { useRef } from "react";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const truckX = useTransform(scrollYProgress, [0, 0.5], ["-100%", "100%"]);
  const truckX2 = useTransform(scrollYProgress, [0.5, 1], ["-100%", "100%"]);

  const services = [
    {
      icon: Package,
      title: "Cargo Transportation",
      description: "Reliable delivery of goods across Uzbekistan and Central Asia with our modern fleet.",
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Time-sensitive shipments delivered on schedule with real-time tracking.",
    },
    {
      icon: Shield,
      title: "Secure Storage",
      description: "Safe warehousing facilities with 24/7 security and climate control.",
    },
    {
      icon: TrendingUp,
      title: "Fleet Management",
      description: "Professional fleet management services for businesses of all sizes.",
    },
  ];

  const stats = [
    { value: "500+", label: "Deliveries/Month" },
    { value: "50+", label: "Fleet Vehicles" },
    { value: "15+", label: "Years Experience" },
    { value: "99%", label: "On-Time Delivery" },
  ];

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroTruck})` }}
        >
          <div className="absolute inset-0 gradient-overlay" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-shimmer gradient-gold-shine bg-clip-text text-transparent">
              Driving Uzbekistan's
              <br />
              Logistics Forward
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-2xl mx-auto">
              Professional trucking and logistics services connecting businesses across Central Asia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="text-lg px-8 shadow-large">
                  Our Services <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 shadow-large">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Animated Truck Divider */}
      <div className="relative h-32 bg-secondary overflow-hidden">
        <motion.div
          style={{ x: truckX }}
          className="absolute top-1/2 -translate-y-1/2"
        >
          <Truck className="w-24 h-24 text-primary" />
        </motion.div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-secondary relative overflow-hidden">
        {/* Floating Boxes Background */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
        >
          <Box className="absolute top-10 left-10 w-24 h-24 text-primary animate-float" />
          <Package className="absolute top-20 right-20 w-32 h-32 text-primary animate-float" style={{ animationDelay: "1s" }} />
          <Box className="absolute bottom-10 right-40 w-20 h-20 text-primary animate-float" style={{ animationDelay: "2s" }} />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-shimmer gradient-gold-shine bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm md:text-base text-secondary-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Route Lines */}
        <motion.div
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none opacity-20"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M 0,50 Q 25,20 50,50 T 100,50"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
          </svg>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-shimmer gradient-gold-shine bg-clip-text text-transparent">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      <div className="bg-accent rounded-lg p-4 w-fit mb-4 group-hover:scale-110 transition-smooth">
                        <Icon className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Animated Truck Divider 2 */}
      <div className="relative h-32 bg-background overflow-hidden">
        <motion.div
          style={{ x: truckX2 }}
          className="absolute top-1/2 -translate-y-1/2"
        >
          <div className="flex items-center gap-6">
            <Truck className="w-24 h-24 text-primary" />
            <div className="flex gap-3">
              <Box className="w-12 h-12 text-primary opacity-70" />
              <Box className="w-12 h-12 text-primary opacity-70" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Coverage Map Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        {/* Animated Delivery Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
        >
          <Route className="absolute top-10 left-1/4 w-40 h-40 text-primary animate-float" />
          <Truck className="absolute bottom-20 right-1/4 w-48 h-48 text-primary animate-float" style={{ animationDelay: "1.5s" }} />
          <MapPin className="absolute top-1/3 right-10 w-32 h-32 text-primary animate-float" style={{ animationDelay: "0.5s" }} />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-secondary-foreground">
                Coverage Across
                <br />
                <span className="animate-shimmer gradient-gold-shine bg-clip-text text-transparent">Central Asia</span>
              </h2>
              <p className="text-lg text-secondary-foreground/90 mb-6">
                Our extensive network covers all major routes throughout Uzbekistan and neighboring countries,
                ensuring your cargo reaches its destination efficiently and safely.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-secondary-foreground">All regions of Uzbekistan covered</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-secondary-foreground">Cross-border logistics to Kazakhstan, Kyrgyzstan, and Tajikistan</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-secondary-foreground">Strategic hubs in Tashkent, Samarkand, and Bukhara</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={mapUzbekistan}
                alt="Coverage map of Uzbekistan and Central Asia"
                className="rounded-lg shadow-large animate-float"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Animated Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
        >
          <Truck className="absolute top-10 left-10 w-48 h-48 text-primary animate-float" />
          <Package className="absolute bottom-10 right-10 w-40 h-40 text-primary animate-float" style={{ animationDelay: "1s" }} />
          <Clock className="absolute top-1/2 left-1/4 w-36 h-36 text-primary animate-float" style={{ animationDelay: "2s" }} />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-hero rounded-2xl p-12 text-center shadow-large"
          >
            <Users className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-primary-foreground mb-4 animate-shimmer gradient-gold-shine bg-clip-text text-transparent">Join Our Team</h2>
            <p className="text-xl text-primary-foreground/95 mb-8 max-w-2xl mx-auto">
              We're always looking for professional drivers and logistics specialists to join our growing team.
            </p>
            <Link to="/careers">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                View Opportunities <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
