// src/components/CreateProductPage.js
import React, { useState } from 'react';
import { createProduct } from '../services/productService';  // Importing createProduct function

function CreateProductPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { name, description, price, image, category, stock };

    try {
      await createProduct(productData);
      setSuccess('Product created successfully!');
      setError('');
    } catch (err) {
      setError('Failed to create product. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div>
      <h1>Create Product</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default CreateProductPage;
