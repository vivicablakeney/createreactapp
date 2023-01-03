import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Filter from './Filter';




const ProductCards = () => {
const [product, setProducts] = useState([]);
const [active, setActive] = useState();
const [filtered, setFiltered] = useState([]);


useEffect(()=>{
const fetchAllProducts = async()=>{
try{
const res = await axios.get('http://localhost:3000/products')
setProducts(res.data);
setFiltered(res.data);


}catch (err){
console.log(err);
}
};
fetchAllProducts()
},[]); 


return( 
<div> 
<Filter product={product} setFiltered={setFiltered} active={active} setActive={setActive} />
<div className="products">
<div className="products-grid">
{filtered.map((product) => (
<div className="product" key={product.id}>
<div className="product-container">
<div className="productimage">
<img src={product.image} alt={product.name} />
</div>
</div>
<div className="body">
<h3 className="title">{product.name}</h3>
<p className="description">{product.description}</p>
<div className="amount">${product.price}</div>
<button className="cardbtn">Add to Cart</button>

</div>
</div>
))}
</div>
</div>
</div> 
) 
}
   

export default ProductCards;