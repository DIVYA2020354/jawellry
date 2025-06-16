import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  const avgRating = (product.reviews.reduce((a,b) => a + b, 0) / product.reviews.length).toFixed(1);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ₹{product.price} (Discount: {product.discount}%)</p>
      <p>Average Rating: {avgRating} / 5</p>
      {/* Add to cart button functionality can be added here */}
    </div>
  );
}

export default ProductDetail;
