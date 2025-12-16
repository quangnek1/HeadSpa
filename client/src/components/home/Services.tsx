import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import service1 from "@assets/generated_images/close_up_of_hands_massaging_a_head_with_foam.png";
import service2 from "@assets/generated_images/aromatherapy_oils_and_herbs_on_a_wooden_tray.png";
import service3 from "@assets/generated_images/relaxing_herbal_foot_bath_with_flower_petals.png";

const services = [
  {
    id: 1,
    title: "Traditional Head Spa",
    price: "$130",
    duration: "60 Mins",
    description: "Our signature treatment including scalp analysis, deep cleansing, massage, and steam therapy.",
    image: service1
  },
  {
    id: 2,
    title: "Aromatherapy Bliss",
    price: "$120",
    duration: "60 Mins",
    description: "A full body relaxation experience using custom blended essential oils to soothe the senses.",
    image: service2
  },
  {
    id: 3,
    title: "Premium Experience",
    price: "$180",
    duration: "90 Mins",
    description: "The ultimate indulgence combining our head spa with a restorative foot bath and facial.",
    image: service3
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium block mb-3">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Curated Treatments
          </h2>
          <div className="w-24 h-[1px] bg-primary/30 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-stone-100">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <div className="flex justify-center items-center space-x-3 text-muted-foreground text-sm uppercase tracking-wider mb-4">
                  <span>{service.duration}</span>
                  <span className="w-1 h-1 bg-primary rounded-full" />
                  <span>{service.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 px-4">
                  {service.description}
                </p>
                <Button variant="outline" className="border-primary/30 hover:bg-primary hover:text-white rounded-none font-serif tracking-wide">
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
