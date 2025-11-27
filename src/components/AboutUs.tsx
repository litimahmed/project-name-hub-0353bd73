import { motion } from "framer-motion";
import { Heart, Users, Award, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/about-us-new.jpg";

const AboutUs = () => {
  const stats = [
    { icon: Users, value: "100K+", label: "Happy Readers", color: "eco-blue" },
    { icon: Award, value: "50+", label: "Awards Won", color: "eco-yellow" },
    { icon: Heart, value: "12+", label: "Stories", color: "eco-green" },
    { icon: TrendingUp, value: "95%", label: "Engagement", color: "eco-purple" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-eco-purple/10 via-background to-eco-yellow/10">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-20 w-72 h-72 bg-eco-blue/25 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -15, 0],
          opacity: [0.25, 0.4, 0.25] 
        }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-eco-green/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          y: [0, 15, 0],
          opacity: [0.2, 0.35, 0.2] 
        }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      
      {/* Floating heart icon */}
      <motion.div
        className="absolute top-1/3 left-1/4"
        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Heart className="w-12 h-12 text-eco-purple opacity-30 fill-eco-purple" />
      </motion.div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Our Mission:</span>
                <br />
                <span className="gradient-text">Inspiring</span>
                <br />
                <span className="text-foreground">the Next Generation 🌱</span>
              </h2>
            </motion.div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We believe that teaching children about environmental responsibility should be fun, engaging, and memorable. Our interactive storybooks combine education with entertainment to create lasting impact.
            </p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`bg-gradient-to-br from-card to-${stat.color}/10 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-${stat.color}/20`}
                >
                  <stat.icon className={`w-8 h-8 text-${stat.color} mb-2`} />
                  <div className={`text-3xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <img
                src={aboutImage}
                alt="About EcoTales"
                className="rounded-3xl shadow-2xl w-full animate-float"
              />
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-eco-yellow/40 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-eco-green/30 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
