import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import PreciousPlatingPage from './components/PreciousPlatingPage';
import MetalStickersPage from './components/MetalStickersPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/precious-plating" element={<PreciousPlatingPage />} />
        <Route path="/metal-stickers" element={<MetalStickersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/careers" element={<CareersPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
