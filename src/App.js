import './App.css';
import SvgLogo from './Assets/HeaderLogo.js'
import Explore from './components/Explore/Explore';
import MainPage from './components/MainPage.jsx';
import Reasons from './components/Reasons/Reasons';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 360 }}
          transition={{ ...transition, duration: 1 }}
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
    </div>
  );
}

export default App;
