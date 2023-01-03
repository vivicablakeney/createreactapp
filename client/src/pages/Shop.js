import React from 'react';
import Products from '../components/Products';
import Filter from '../components/Filter';

function Shop() {
return (
<div>
<div className='dog-food'>

<div className='image'>
<img src="images/dog_food.png"/>
</div>

<div className='content'>
<h3> <span>air dried</span> dog food & treats </h3>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat iure illo, repudiandae rem porro sunt.</p>
<div className='amount'>$15.00 - $55.00</div>
<a href="#"> <img src="images/shop_now_dog.png" /> </a>
</div>

</div>

<div className='cat-food'>

<div className='content'>
<h3> <span>air dried</span> cat food & treats </h3>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat iure illo, repudiandae rem porro sunt.</p>
<div className='amount'>$15.00 - $55.00</div>
<a href="#"> <img src="images/shop_now_cat.png" /> </a>
</div>

<div className='image'>
<img src="images/cat_food.png" />
</div>

</div>
<h1 className='heading'> our <span> products </span> </h1>
<br></br>

<Products/>
<Filter/>
</div>


       
      
)
}

export default Shop;
