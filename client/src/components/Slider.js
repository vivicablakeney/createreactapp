import React, { useState, useEffect } from 'react';
import '../Styles.css/Slider.css'


function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
  {
  id: 0,
  image: '/images/moyita.png',
  },
  {
  id: 1,
      image: '/images/olsen.png',
    },
    {
      id: 2,
      image: '/images/kyky.png' ,
    },
    {
      id: 3,
      image: '/images/chicken.png' ,
    },
    {
      id: 3,
      image: '/images/gremlin.png' ,
    },
  
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      <div className="hero-slider">
      <div className='about'>
<div class="content">
<br></br><h3>meet<span> our pack </span></h3>
<p>Meet the five pups who were the pivot of this company. 
our pack includes 4 rescued mutts, and a english white lab.
All 1 year apart. Samoa is the Alpha of the pack. They all enjoy group outings, such as hikes with their pawrents. 
Each one of them has their own unique personality and quirk. The slide show is ordered from oldest to youngest.
<h4>Samoa Michelle: Pitbull, 5yrs.</h4>
<h4>Olsen Andres: English Lab, 4yrs </h4>
<h4>KyloRen: Golden Retriever mix, 3yrs.</h4> 
<h4>Sparow Alexander: SuperMutt, 2yrs.</h4>
<h4>ReySkywalker: JackRussell Terrier Mix, 1yr</h4>
</p>
<button className='btn'>read more</button>
</div>
</div>
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
      </div>
    </div>
  );
}

export default HeroSlider;
