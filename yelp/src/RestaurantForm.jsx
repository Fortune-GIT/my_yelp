// RestaurantForm.jsx
import { useState } from 'react'
import './RestaurantForm.css'

export default function RestaurantForm() {
  const [formData, setFormData] = useState({ name: '', description: '', city: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Restaurant Data:', formData)
    // Later: Save to backend or DataStore
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" onChange={handleChange} />
      <input type="text" name="city" placeholder="City" onChange={handleChange} />
      <button type="submit">Add New Restaurant</button>
    </form>
  )
}
