import { motion } from "framer-motion";
import aboutImage from "@assets/generated_images/japanese_tea_set_on_a_low_table.png";
import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/3] relative z-10">
              <img 
                src={aboutImage} 
                alt="Japanese Tea Ceremony" 
                className="w-full h-full object-cover shadow-xl"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 bg-primary/10 -z-0" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium block mb-4">
              Our Philosophy
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              Harmony of Body, <br /> Mind & Soul
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Kokoro, we believe that true beauty comes from within. Our treatments are designed not just to cleanse the scalp, but to clear the mind.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We adhere to the highest standards of Japanese hospitality (Omotenashi). 
              Every detail, from the temperature of the water to the pressure of the massage, 
              is carefully considered to ensure your absolute comfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Traditional Techniques",
                "Organic Products",
                "Private Suites",
                "Certified Therapists"
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <span className="bg-primary/10 p-1 rounded-full text-primary">
                    <Check size={14} />
                  </span>
                  <span className="font-serif text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
