import React from 'react' ;
import books from '../../public/booklist.json';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Card from './Card';

function Freebook(){

    let freebook =  books.filter((item)=> item.category=='Free');
   console.log(freebook);
   
   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   
   return(
       <>
       <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        
        <div>
        <h1  className='font-bold text-2xl pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati repellendus ex, cumque quos voluptatum dicta esse ea accusantium, quas provident ducimus aperiam quasi nostrum</p>
        </div>
        <div>
        <Slider className='lg:pl-5' {...settings}>
        {freebook.map((item)=> <Card item={item}/>)}
       </Slider>
        </div>
        </div>
       </>
    )
} 

export default Freebook;