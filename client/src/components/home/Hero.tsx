import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/zen_japanese_head_spa_interior_with_soft_lighting.png";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-sm md:text-base uppercase tracking-[0.3em] mb-4 md:mb-6 font-light">
            The Ultimate Relaxation
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 leading-tight">
            Japanese <br />
            <span className="italic">Head Spa</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl font-light mb-10 text-white/90">
            A sanctuary where traditional techniques meet modern wellness. 
            Reconnect with your inner peace.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 rounded-none px-8 py-6 text-lg tracking-widest font-serif"
          >
            BOOK YOUR ESCAPE
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-white/50 mx-auto" />
        <span className="block text-[10px] uppercase tracking-widest mt-2">Scroll</span>
      </motion.div>
    </section>
  );
}
