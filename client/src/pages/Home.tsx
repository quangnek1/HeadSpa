import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Gallery from "@/components/home/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        
        {/* Booking CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground text-center px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Ready to Relax?
            </h2>
            <p className="text-lg md:text-xl font-light mb-10 opacity-90">
              Book your appointment today and begin your journey to wellness. 
              Spaces are limited.
            </p>
            <button className="bg-white text-primary hover:bg-stone-100 transition-colors text-lg tracking-widest font-serif px-10 py-4 uppercase">
              Book Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
