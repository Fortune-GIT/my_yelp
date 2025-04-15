import { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Restaurant } from './models';
import './RestaurantForm.css';

export default function RestaurantForm() {
  const [formData, setFormData] = useState({ name: '', description: '', city: '' });
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const allRestaurants = await DataStore.query(Restaurant);
    setRestaurants(allRestaurants);
  };

  useEffect(() => {
    fetchRestaurants();
    const subscription = DataStore.observe(Restaurant).subscribe(() => fetchRestaurants());
    return () => subscription.unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) return;
    await DataStore.save(new Restaurant({ ...formData }));
    setFormData({ name: '', description: '', city: '' });
  };

  const handleDelete = async (id) => {
    const toDelete = await DataStore.query(Restaurant, id);
    if (toDelete) await DataStore.delete(toDelete);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
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
        <button type="submit">Add Restaurant</button>
      </form>

      <ul className="restaurant-list">
        {restaurants.map((rest) => (
          <li key={rest.id}>
            <div>
              <strong>{rest.name}</strong> - {rest.description} ({rest.city})
            </div>
            <button className="delete-button" onClick={() => handleDelete(rest.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
