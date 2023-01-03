import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ProductCards = () => {
  const [product, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/products');
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  const filteredProducts =
    selectedId.length === 0
      ? product
      : product.filter(p => selectedId.includes( p.id));

  return (
    <div className="products">
      <br></br>
      <div className="filter-container">
        
        <button onClick={() => setSelectedId([0])}>All</button>
        <button onClick={() => setSelectedId([10,11,12])}>Cat</button>
        <button onClick={() => setSelectedId([7,8,9,10,11,12])}>Food</button>
        <button onClick={() => setSelectedId([1,2,3,4,5,6,])}>Treats</button>
      </div>
      
      <br></br>
      <div className="products-grid">
        {filteredProducts.map(product => ( 
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
)
}
   

export default ProductCards;