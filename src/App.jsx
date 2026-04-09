import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Pricing from './components/Pricing';
import CalEmbed from './components/CalEmbed';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Philosophy />
        <Pricing />
        <CalEmbed />
      </main>
      <Footer />
    </>
  );
}
