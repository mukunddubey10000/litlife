import React, { useEffect, useState } from 'react'
import all from '../../Assets/all.png'
import erickshaw140AH from '../../Assets/erickshaw140AH.png'
import inverterBatteryJumbo180AH from '../../Assets/inverterBatteryJumbo180AH.png'
import solar_updated from '../../Assets/solar_updated.png'
import solar45AH from '../../Assets/solar45AH.png'
import tallTubular from '../../Assets/tallTubular.png'
import tallTubular200AH from '../../Assets/tallTubular200AH.png'
import './SlideShow.css'

const SlideShow = ({ }) => {
    const [index, setIndex] = useState(0);
    const images = [all, erickshaw140AH, inverterBatteryJumbo180AH, solar_updated, solar45AH, tallTubular, tallTubular200AH];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIndex(prevIndex => (prevIndex == images.length - 1) ? 0 : prevIndex + 1)
        }, 4000)
        return () => clearTimeout(timeoutId)
    }, [index])

    return (
        <div className='slideshow-container'>
            <div className='image' style={{ backgroundImage: `url(${"https://c1.wallpaperflare.com/preview/496/932/884/wall-texture-grey-backgrounds.jpg"})` }} >
                <div className='image2' style={{ backgroundImage: `url(${images[index]})` }} />
            </div>
        </div>
    )
}

export default SlideShow