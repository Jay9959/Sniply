import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import About from './components/About';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import TransitionOverlay from './components/TransitionOverlay';
import LoginModal from './components/LoginModal';
import AccountModal from './components/AccountModal';
import PaymentModal from './components/PaymentModal';

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionText, setTransitionText] = useState('SNIPLY');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string, price: string } | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ name: 'Alexander Knight', email: 'concierge@sniply.com' });

  // Prevent background scrolling when any modal is open
  useEffect(() => {
    if (isLoginModalOpen || isAccountModalOpen || isPaymentModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoginModalOpen, isAccountModalOpen, isPaymentModalOpen]);

  useEffect(() => {
    const savedLogin = sessionStorage.getItem('isLoggedIn');
    const savedName = sessionStorage.getItem('userName');
    const savedEmail = sessionStorage.getItem('userEmail');

    if (savedLogin === 'true') {
      setIsLoggedIn(true);
      setIsLoginModalOpen(false);
      setUserData({
        name: savedName || 'Alexander Knight',
        email: savedEmail || 'concierge@sniply.com'
      });
    } else {
      setIsLoggedIn(false);
      setIsLoginModalOpen(true);
    }
  }, []);

  const handleLoginSuccess = (name: string, email: string) => {
    setIsLoggedIn(true);
    setUserData({ name, email });
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('userName', name);
    sessionStorage.setItem('userEmail', email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAccountModalOpen(false);
    sessionStorage.clear();
    setUserData({ name: 'Alexander Knight', email: 'concierge@sniply.com' });
    setIsLoginModalOpen(true);
  };

  const handleUpdateName = (newName: string) => {
    setUserData(prev => ({ ...prev, name: newName }));
    sessionStorage.setItem('userName', newName);
  };

  const handleSelectPlan = (plan: { name: string, price: string }) => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }
    setSelectedPlan(plan);
    setIsPaymentModalOpen(true);
  };

  const handleNavClick = (targetId: string, itemName: string) => {
    setTransitionText(itemName);
    setIsTransitioning(true);

    // Simulate navigation with a delay for the animation
    setTimeout(() => {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Hide transition after scroll starts
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ThreeBackground />
      <TransitionOverlay isActive={isTransitioning} text={transitionText} />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        canClose={isLoggedIn}
      />
      <AccountModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
        onLogout={handleLogout}
        user={userData}
        onUpdateUser={handleUpdateName}
      />
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        plan={selectedPlan}
      />
      <Navbar
        onNavClick={handleNavClick}
        onLoginClick={() => isLoggedIn ? setIsAccountModalOpen(true) : setIsLoginModalOpen(true)}
        isLoggedIn={isLoggedIn}
        userName={userData.name}
      />
      <main className="flex-1">
        <Hero />
        <Services />
        <Pricing onSelectPlan={handleSelectPlan} />
        <Portfolio />
        <Testimonials />
        <Booking />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
