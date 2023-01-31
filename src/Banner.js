import React, { useEffect, useState } from 'react';
// import Item from './Item'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    Button,
} from 'reactstrap';

import mt from './mt.jpg';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Banner  () {
const location=useLocation();
const datas=location.state;

    const [activeIndex, setActiveIndex] = useState(0);
  const [data,setdata]=useState("");
    // State for Animation
    const [animating, setAnimating] = useState(false);
  
    // Sample items for Carousel
    const items = [
        {
            caption: 'Sample Caption One',
            src: datas.Img,
            altText: 'Slide One'
        },
        {
            caption: 'Sample Caption Two',
            src: datas.Imgs,
            altText: 'Slide Two'
        },
        {
            caption: 'Sample Caption Two',
            src: datas.Imgss,
            altText: 'Slide Three'
        }
    
    ];
    
  
    const itemLength = items.length - 1
  useEffect(() => {

// console.log(items);
  }, [data])
  
    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    
    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem 
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img src={item.src} alt={item.altText} style={{width:"500px",margin:"auto"}} />
            </CarouselItem>
        );
    })
     
    
    return (
        <div>
        <div style={{width:"600px",margin:"auto",marginLeft:"10px",display:"flex",
             padding: 30
        }}>
            <h8></h8>
          <div style={{marginLeft:"40px"}}>  
            <Carousel previous={previousButton} next={nextButton}
                activeIndex={activeIndex}>
                <CarouselIndicators items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton}/>
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />
            </Carousel>
            </div>
          <div style ={{marginLeft:"50px",fontFamily:"forte",color:"darkblue",height:"500px",width:"250px",fontSize:"40px"}}> 
          <p className='namebuy'> {datas.Name}</p>
          <br/>
          <p style={{marginTop:"150px",fontFamily:"cursive",color:"black",width:"220px",fontSize:"17px",marginLeft:"20px"}}>{datas.Mail}</p>
          <Button style={{borderRadius:"5px",marginLeft:"20px",backgroundColor:"darkgreen",fontFamily:"sans-serif"}}>Add to Cart</Button>
          </div>
         
  </div>
      </div>  
    );
};

export default Banner;