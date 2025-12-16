import { motion } from "framer-motion";
import img1 from "@assets/generated_images/zen_japanese_head_spa_interior_with_soft_lighting.png";
import img2 from "@assets/generated_images/close_up_of_hands_massaging_a_head_with_foam.png";
import img3 from "@assets/generated_images/aromatherapy_oils_and_herbs_on_a_wooden_tray.png";
import img4 from "@assets/generated_images/relaxing_herbal_foot_bath_with_flower_petals.png";
import img5 from "@assets/generated_images/japanese_tea_set_on_a_low_table.png";

const images = [img1, img2, img3, img4, img5, img1];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
          The Experience
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A visual journey through our sanctuary of calm.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative overflow-hidden group ${
              index === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
            }`}
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-white font-serif tracking-widest uppercase border border-white/50 px-6 py-2 bg-black/20 backdrop-blur-sm">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
