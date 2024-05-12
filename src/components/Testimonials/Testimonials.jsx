import React, { useState } from 'react'
import './Testimonials.css'
import '../MainPage.css'
import { testimonialsData } from './testimonialsData'
import rightArrow from '../../Assets/rightArrow.png';
import leftArrow from '../../Assets/leftArrow.png';

const Testimonials = () => {
    const [isSelected, setIsSelected] = useState(0);
    // useState(() => {
    //     console.log('Mukund index = ', isSelected);
    // }, [isSelected])

    return (
        <div name="testimonials" className='Testimonials'>
            <div className='left-t'>
                <span>Testimonials</span>
                <span className="stroke-text">What they say </span>
                <span>about us?</span>
                <span className='user-review1'>
                    {testimonialsData?.[isSelected]?.review}
                </span>
                <span className='user-review2'>
                    <span style={{ color: "#35ae2a" }}>{testimonialsData[isSelected]?.name}</span>
                    <span className='designation'>{' - ' + testimonialsData[isSelected]?.designation}</span>
                </span>
            </div>
            <div className='right-t'>
                <div></div>
                <div></div>
                <img src={testimonialsData?.[isSelected]?.image} alt="" />
                <div className="arrows">
                    <img src={leftArrow} alt="" onClick={() => isSelected != 0 ? setIsSelected((prev) => prev - 1) : setIsSelected(testimonialsData?.length - 1)} />
                    <img src={rightArrow} alt="" onClick={() => isSelected != testimonialsData?.length - 1 ? setIsSelected((prev) => prev + 1) : setIsSelected(0)} />
                </div>
            </div>
        </div>
    )
}

export default Testimonials