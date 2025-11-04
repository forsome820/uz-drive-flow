import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import warehouse from "@/assets/warehouse.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide reliable, efficient, and professional logistics solutions that power businesses across Central Asia.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To become the leading logistics partner in Central Asia, known for innovation, reliability, and customer satisfaction.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in service quality, safety, and operational efficiency.",
    },
    {
      icon: Users,
      title: "Team First",
      description: "Our success is built on the dedication and professionalism of our drivers and staff.",
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About UzbekLogistics</h1>
            <p className="text-xl text-muted-foreground">
              Building bridges between businesses through reliable transportation and logistics services since 2008
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={warehouse}
                alt="UzbekLogistics warehouse facility"
                className="rounded-lg shadow-large"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 2008 in Tashkent, UzbekLogistics began with a simple mission: to provide
                  reliable trucking services that businesses could depend on. From our humble beginnings
                  with just 5 trucks, we've grown into one of Central Asia's most trusted logistics partners.
                </p>
                <p>
                  Today, we operate a modern fleet of over 50 vehicles, serving hundreds of clients across
                  Uzbekistan and neighboring countries. Our success is built on the foundation of
                  reliability, professionalism, and an unwavering commitment to customer satisfaction.
                </p>
                <p>
                  We've invested heavily in modern technology, tracking systems, and training programs to
                  ensure that every shipment is handled with the utmost care and efficiency. Our team of
                  experienced drivers and logistics specialists work around the clock to keep your business
                  moving forward.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-large transition-smooth">
                    <CardContent className="p-6 text-center">
                      <div className="bg-accent rounded-full p-4 w-fit mx-auto mb-4">
                        <Icon className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose UzbekLogistics?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
              <p className="text-muted-foreground">
                Over a decade of proven expertise in logistics and transportation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary mb-2">99%</div>
              <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-muted-foreground">
                Consistently meeting delivery schedules with precision timing
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock support for all your logistics needs
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
