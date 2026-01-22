import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CareersPage from './components/CareersPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'products':
        return <ProductsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'careers':
        return <CareersPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
