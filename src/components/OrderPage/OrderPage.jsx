import React from 'react'
import './OrderPage.css'
import { images, items } from './OrderPageItems'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';

const OrderPage = () => {
    const [openPopup, setOpenPopup] = useState(0);

    const backgroundGradient = "https://c1.wallpaperflare.com/preview/496/932/884/wall-texture-grey-backgrounds.jpg";
    return (
        <React.Fragment>
            {
                openPopup ? (
                    <Popup open={openPopup} onClose={() => setOpenPopup(0)} position="center">
                        <div style={{ height: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                Currently unavailable for online orders
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                Please Order Via Email/Call...
                            </div>
                            <button
                                style={{ alignSelf: 'center', backgroundColor: '#35ae2a', color: 'white' }}
                                onClick={() => setOpenPopup(0)}
                            >
                                Close
                            </button>
                        </div>
                    </Popup>
                ) : <></>
            }
            <div className='OrderPageContainer'>
                <div className='items-container'>
                    {items?.map((item, index) => {
                        return (
                            <div className='items' onClick={() => setOpenPopup(1)}>
                                <div className='product-image-container'>
                                    {/* <div style={{ backgroundImage: `url(${backgroundGradient})` }} > */}
                                    <div style={{ backgroundImage: `url(${images[index]})`, opacity: 1, zIndex: 1 }} />
                                    {/* </div> */}
                                    {/* <img src={images?.[index]} alt="" />
                                    <img src={""} alt="" /> */}
                                </div>
                                <div className='product-text-container'>
                                    <span>{item?.name}</span>
                                    <span>{"> " + item?.description1}</span>
                                    <span>{"> " + item?.description2}</span>
                                    <span>{"> " + item?.description3}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div style={{ position: 'relative', bottom: '3rem' }} />
        </React.Fragment >
    )
}

export default OrderPage