import React, { useState } from "react";
import "./MainPage.css";
import Header from "./Header/Header";
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter'
import all from './../Assets/all.png'
import leftArrow from './../Assets/leftArrow.png'
import rightArrow from './../Assets/rightArrow.png'
import erickshaw140AH from './../Assets/erickshaw140AH.png';
import inverterBatteryJumbo180AH from './../Assets/inverterBatteryJumbo180AH.png';
import solar25AH from './../Assets/solar25AH.png';
import solar45AH from './../Assets/solar45AH.png';
import tallTubular200AH from './../Assets/tallTubular200AH.png';

const MainPage = () => {
	const galleryImageList = [erickshaw140AH, inverterBatteryJumbo180AH, solar25AH, solar45AH, tallTubular200AH];
	const [galleryIndex, setGalleryIndex] = useState(0);

	const transition = { type: 'spring', duration: 1.5 }

	return (
		<div className="MainPage">
			<div className="left-h">
				<Header />


				<div className="the-best-ad">
					<motion.div
						initial={{ left: '180px' }}
						whileInView={{ left: '12px' }}
						transition={{ ...transition, type: 'tween' }}
					></motion.div>
					<span>
						from the best battery makers
					</span>
				</div>


				<div className="Title-Text">
					<div>
						<span className="stroke-text">Experience </span>
					</div>
					<div>
						<span>Best Innovations</span>
					</div>
					<div className="insert-line-break">
						<span>Get the best batteries suitable to your needs.</span>
						<br />
						<span>Completely made in India</span>
					</div>
				</div>


				<div className="figures">
					<div>
						<span><NumberCounter start={30} end={54} delay='3' preFix="+" /></span>
						<span>Months Warranty</span>
					</div>
					<div>
						<span><NumberCounter start={2} end={8} delay='2' preFix="+" /></span>
						<span>Products</span>
					</div>
					<div>
						<span><NumberCounter start={0} end={1} delay='1' preFix="+" /></span>
						<span>Retailers</span>
					</div>
				</div>
			</div>
			<div className="right-h">
				<button className="view-cart">View Cart</button>
				<img src={all} alt="all-products" className="all-product-img" />
				<div className="gallery">
					{<img src={galleryImageList[galleryIndex]} alt="" />}
				</div>
				<div className="arrows">
					<img src={leftArrow} alt="rightArrow" className="leftArrow" onClick={() => galleryIndex == galleryImageList?.length - 1 ? setGalleryIndex(0) : setGalleryIndex((index) => index + 1)} />
					<img src={rightArrow} alt="rightArrow" className="rightArrow" onClick={() => galleryIndex == 0 ? setGalleryIndex(galleryImageList?.length - 1) : setGalleryIndex((index) => index - 1)} />
				</div>
			</div>
		</div >
	);
};

export default MainPage;
