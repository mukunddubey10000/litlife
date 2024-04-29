import './App.css';
import SvgLogo from './Assets/HeaderLogo.js'
import Explore from './components/Explore/Explore';
import MainPage from './components/MainPage.jsx';
import Reasons from './components/Reasons/Reasons';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Testimonials from './components/Testimonials/Testimonials';

function App() {

  const [isLoading, setIsLoading] = useState(1);

  const transition = { type: 'spring', duration: 0.5 }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);
  }, []);

  if (isLoading) {
    return (
      <div className="AppLoading">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 360 }}
          transition={{ ...transition, duration: 1.5 }}
          className="AppLoadingContainer">
          <SvgLogo />
        </motion.div>
      </div>
    )
  }
  return (
    <div className="App">
      <MainPage />
      <Explore />
      <Reasons />
      <Testimonials />
    </div>
  );
}

export default App;
