import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd';

const Homepage = ({events}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentSlide((prevSlide)=>(prevSlide+1)%events.length);

        },3000)
        return () => clearInterval(interval);
    },[currentSlide]);
  return (
    <Carousel autoplay>
      {events.map((event, index) => (
        <div key={index}>
          <img className='img' src={event.image} alt={`Image ${index + 1}`} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        </div>
      ))}
    </Carousel>
  )
}

export default Homepage