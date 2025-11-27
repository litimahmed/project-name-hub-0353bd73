import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, Target, Star, Palette } from "lucide-react";
import interactiveImage from "@/assets/interactive-storybook.jpg";

interface InteractiveFeatureProps {
  onDiscoverClick: () => void;
}

const InteractiveFeature = ({ onDiscoverClick }: InteractiveFeatureProps) => {
  const features = [
    { icon: Palette, text: "Beautiful illustrations that captivate young minds", color: "eco-orange" },
    { icon: Target, text: "Interactive quizzes to test their knowledge", color: "eco-blue" },
    { icon: Star, text: "Fun rewards and achievements for completing stories", color: "eco-yellow" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-eco-blue/10 via-background to-eco-purple/10">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 right-20 w-80 h-80 bg-eco-orange/30 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-72 h-72 bg-eco-green/25 rounded-full blur-3xl"
        animate={{ 
          scale: [1.3, 1, 1.3],
          y: [0, -20, 0],
          opacity: [0.25, 0.45, 0.25] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Floating book icon */}
      <motion.div
        className="absolute top-1/4 right-1/3"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <BookOpen className="w-14 h-14 text-eco-purple opacity-30" />
      </motion.div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={interactiveImage}
                alt="Interactive storybook experience"
                className="rounded-3xl shadow-2xl w-full animate-float"
              />
            </motion.div>
            
            {/* Decorative sparkles */}
            <motion.div
              className="absolute -top-4 -left-4 w-16 h-16 bg-eco-blue/40 rounded-full"
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-20 h-20 bg-eco-purple/30 rounded-full"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left space-y-6 order-1 md:order-2"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                <span className="gradient-text">Interactive Stories</span>
                <br />
                <span className="text-foreground">That Teach &</span>
                <br />
                <span className="text-foreground">Entertain 🎪</span>
              </h2>
            </motion.div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Every story comes alive with colorful illustrations, fun quizzes, and interactive elements that make learning about recycling an adventure!
            </p>
            
            <motion.ul className="space-y-4 pt-2">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer"
                >
                  <div className={`p-2 rounded-lg bg-${feature.color}/20`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                  </div>
                  <span className="text-lg font-medium text-foreground pt-1">{feature.text}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-4"
            >
              <Button
                size="lg"
                onClick={onDiscoverClick}
                className="bg-gradient-to-r from-eco-blue to-eco-purple hover:from-eco-blue/90 hover:to-eco-purple/90 text-white font-bold text-lg px-10 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Discover Stories
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeature;
