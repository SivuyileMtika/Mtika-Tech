import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  return (
    <>
      <div id="loading-screen">
        <LoadingScreen />
      </div>
      <div className="min-h-screen bg-background relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <Header />
          <Hero />
          <Services />
          <About />
          <Contact />
        </div>
        <ScrollToTop />
      </div>
    </>
  );
}