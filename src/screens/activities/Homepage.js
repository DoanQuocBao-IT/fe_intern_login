import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd';

const Homepage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentSlide((prevSlide)=>(prevSlide+1)%images.length);

        },3000)
        return () => clearInterval(interval);
    },[currentSlide]);
    const images = [
        'https://mobirace.net/Upload/Images/GiaiChay/2023/giai_khoi_dntw_2023_ngang.jpg',
        'https://th.bing.com/th/id/OIP.5fU_AQcF70R8_gjcDfDC9QAAAA?pid=ImgDet&rs=1',
        'https://sonadezi.com.vn/wp-content/uploads/2020/11/banner-Hoi-Thao-03.jpg',
        // Thêm các đường dẫn hình ảnh khác vào đây
      ];
  return (
    <Carousel autoplay>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
        </div>
      ))}
    </Carousel>
  )
}

export default Homepage