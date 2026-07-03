import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      {/* Custom cursor (client only) */}
      <CustomCursor />

      {/* Fixed scroll progress indicator */}
      <ScrollProgress />

      {/* Fixed navigation */}
      <Navigation />

      {/* Page sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
