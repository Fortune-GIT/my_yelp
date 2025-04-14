import { useState } from 'react';
import './RestaurantForm.css';

export default function RestaurantForm() {
  const [formData, setFormData] = useState({ name: '', description: '', city: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Restaurant:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />
      <button type="submit">Add New Restaurant</button>
    </form>
  );
}
