import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout'
import ActionCall from './components/ActionCall'
import Demarcator from './components/Demarcator'
import Hero from './components/Hero'
import Services from './components/Services'
import Track from './components/Track'
import Testimonials from './components/Testimonials'
import './App.css'

function App() {
const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <MainLayout>
        <Hero />
        <Track />
        <Services />
        <Demarcator />
        <Testimonials />
        <ActionCall />
      </MainLayout>
    </>
  )
}

export default App