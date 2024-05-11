import React, { useState } from 'react'
import './Reasons.css'
import './../MainPage.css'
import { motion } from 'framer-motion';
import SlideShow from '../SlideShow/SlideShow';

const Reasons = () => {
    const tick = "https://cdn-icons-png.flaticon.com/512/1008/1008917.png";
    const transition = { type: 'spring', duration: 0.5 }


    return (
        <div className='Reasons' id="reasons">
            <div className='left-r'>
                {
                    <SlideShow />
                }
            </div>
            <div className='right-r'>
                <span className=''>Some reasons</span>
                <div>
                    <span className='stroke-text'>Why</span>
                    <span> Choose Us?</span>
                </div>

                <div className='details-r'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ...transition }}
                    >
                        <img src={tick} alt="" /><span>Custom Battery Design and Manufacturing</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ...transition, duration: transition?.duration + 0.4 }}
                    >
                        <img src={tick} alt="" /><span>Battery Management Systems (BMS)</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ...transition, duration: transition?.duration + 0.8 }}
                    >
                        <img src={tick} alt="" /><span>Technical Consulting</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ...transition, duration: transition?.duration + 1.2 }}
                    >
                        <img src={tick} alt="" /><span>Battery Testing and Certification</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ...transition, duration: transition?.duration + 1.4 }}
                    >
                        <img src={tick} alt="" /><span>Green Manufacturing Practices</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ...transition, duration: transition?.duration + 1.6 }}
                    >
                        <img src={tick} alt="" /><span>Top class after-sales support</span>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Reasons