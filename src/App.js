import './App.css';
import SvgLogo from './Assets/HeaderLogo.js'
import Explore from './components/Explore/Explore';
import MainPage from './components/MainPage.jsx';
import Reasons from './components/Reasons/Reasons';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Testimonials from './components/Testimonials/Testimonials';
import Header from './components/Header/Header';
import ContactUs from './components/ContactUs/ContactUs';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import OrderPage from './components/OrderPage/OrderPage';
import { useNavigate } from "react-router-dom";

function App() {

  const [isLoading, setIsLoading] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

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
      <AnimatePresence>
        <Header navigate={navigate} />
        <Routes>
          <Route exact path="/" element={
            <>
              <MainPage navigate={navigate} />
              <Explore navigate={navigate} />
              <Reasons navigate={navigate} />
              <Testimonials navigate={navigate} />
              <ContactUs navigate={navigate} />
            </>} />

          <Route path="/orderpage" element={<OrderPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
