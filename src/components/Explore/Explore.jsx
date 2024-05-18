import React from 'react'
import './Explore.css'
import './../Header/Header.css'
import { exploreData } from './exploreData'
import rightArrow from '../../Assets/rightArrow.png'
import { motion } from 'framer-motion';

const Explore = ({ navigate }) => {

    const transition = { type: 'spring', duration: 0.5 }

    return (
        <div name="services" className='Explore' id="explore">
            <div className='Explore-Header'>
                <span className='stroke-text'>Explore our </span>
                <span>Products </span>
                <span className='stroke-text'>segment</span>
            </div>


            <div className='product-categories'>
                {exploreData.map((ele, index) => {
                    const title = ele?.title;
                    const description = ele?.description;
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ...transition, duration: transition?.duration + 1 * (index + 1) }}
                            className='category'
                            onClick={() => navigate('/OrderPage')}
                        >
                            <img src={ele?.image} alt="" />
                            <span>{title}</span>
                            <span>{description}</span>
                            <div className='order-now'>
                                <span>View All</span>
                                <img src={rightArrow} alt="" />
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default Explore