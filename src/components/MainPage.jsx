import React from "react";
import "./MainPage.css";
import Header from "./Header/Header";
import { motion } from 'framer-motion';

const MainPage = () => {
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
						<span>+ 54</span>
						<span>Months Warranty</span>
					</div>
					<div>
						<span>+ 8</span>
						<span>Products</span>
					</div>
					<div>
						<span>+ 1</span>
						<span>Retailers</span>
					</div>
				</div>
			</div>
			<div className="right-h">
				<button className="view-cart">View Cart</button>
			</div>
		</div >
	);
};

export default MainPage;
