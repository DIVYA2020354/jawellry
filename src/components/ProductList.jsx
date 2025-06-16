import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data';

function ProductList() {
  const [category, setCategory] = useState('All');
  const categories = ['All', 'Rings', 'Necklaces', 'Bracelets'];

  const filteredProducts = category === 'All' ? products : products.filter(p => p.category === category);

  return (
    <div>
      <h2>Products</h2>
      <div>
        {categories.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)} style={{margin: '0 5px'}}>
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{border: '1px solid gray', padding: '10px', width: '200px'}}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ₹{product.price}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
