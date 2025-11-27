import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Leaf, Recycle } from "lucide-react";
import heroImage from "@/assets/hero-eco-adventure.jpg";

const Hero = () => {
  const scrollToStories = () => {
    const element = document.getElementById("stories-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-eco-green/10 via-background to-eco-blue/10">
      {/* Animated background blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-eco-yellow/30 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-eco-purple/25 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.25, 0.4, 0.25] 
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Floating icons */}
      <motion.div
        className="absolute top-32 right-1/4"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Leaf className="w-12 h-12 text-eco-green opacity-40" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-1/4"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      >
        <Recycle className="w-16 h-16 text-eco-blue opacity-30" />
      </motion.div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-eco-green/10 px-4 py-2 rounded-full border border-eco-green/30"
            >
              <Sparkles className="w-4 h-4 text-eco-green" />
              <span className="text-sm font-semibold text-eco-green">Interactive Learning</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Magical Stories</span>
              <br />
              <span className="text-foreground">About Recycling &</span>
              <br />
              <span className="text-foreground">Our </span>
              <span className="text-eco-blue">Planet</span> 🌍
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Join our eco-heroes on exciting adventures! Learn how recycling saves the planet through fun, interactive stories designed for young explorers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToStories}
                  className="bg-gradient-to-r from-eco-green to-eco-green/80 hover:from-eco-green/90 hover:to-eco-green/70 text-white font-bold text-lg px-10 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all animate-pulse-glow"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Reading
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-eco-blue text-eco-blue hover:bg-eco-blue hover:text-white font-bold text-lg px-10 py-7 rounded-full transition-all shadow-lg"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <img
                src={heroImage}
                alt="Children learning about recycling"
                className="rounded-3xl shadow-2xl w-full animate-float-slow"
              />
            </motion.div>
            
            {/* Decorative elements around image */}
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 bg-eco-yellow rounded-full opacity-60"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-eco-purple/50 rounded-full opacity-50"
              animate={{ scale: [1.3, 1, 1.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
