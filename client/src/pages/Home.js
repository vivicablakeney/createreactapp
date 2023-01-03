import React from 'react'
import Slider from '../components/Slider'




function Home() {
return (
<div className="html">
 <div className="home">
<div className="content">
<h3> <span>hi! </span>welcome to CINCO pups</h3>
<a href="/shop"><button>shop now</button></a>
</div>
<img src="images/bottom_wave.png" className='wave'/>
</div>

<div className='about'>
<div className='image'>
<img src="images/about_img.png"/>
</div>
<div class="content">
<h3>premium <span>pet food</span> family owned business</h3>
<p>CINCO pups pet shop was founded by Alexia Lorenzana,
Maria Lorenzana, Matthew Lorenzana, and Carlos Lorenzana. We, the company founders, 
have dogs of our own ranging in size from 35 pounds to 95 pounds and want to share our 
enthusiasm for dogs and the companionship we gain from our four legged friends. We are very 
active in Pitbull rescues and Greyhound rescues and this has been a driving force for our desire to open a pet store 
- not only for our needs but the communities pet supply needs as well. As ‘big dog’ people, we are keenly aware of how difficult it can be to find supplies suitable for large breeds. 
You can count on us to ensure that animals of ALL shapes and sizes will be taken into account at CINCO pups pet shop.
</p>
<button className='btn'>read more</button>
</div>
</div>
<Slider/>

</div>



)
}

export default Home;

