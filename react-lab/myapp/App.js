import './App.css';
import React, { useState } from 'react';
const validator = require('validator');

const TrainBookingForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    name: '',
    age: '',
    email: '',
    gender: '',
    insurance: false,
  });

  // State for calculated fare
  const [fare, setFare] = useState(0);

  // Function to handle form data changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!isFormValid()) {
      alert('Please fill in all required fields with valid data.');
      return;
    }

    // Simple fare calculation based on different source and destination
    const calculatedFare = calculateFare(formData.source, formData.destination);

    // Apply discount for female gender
    if (formData.gender === 'female') {
      setFare(calculatedFare - 5);
    } else {
      setFare(calculatedFare);
    }

    // Add insurance cost if checkbox is clicked
    if (formData.insurance) {
      setFare((prevFare) => prevFare + 5);
    }

    // Additional actions, such as sending data to a server or sending an email, can be added here.
  };

  // Function to calculate fare based on source and destination (replace with your logic)
  const calculateFare = (source, destination) => {
    // Replace this with your own fare calculation logic
    // Example: Different fares for different combinations
    if (source === 'source1' && destination === 'destination1') {
      return 15;
    } else if (source === 'source1' && destination === 'destination2') {
      return 20;
    } else if (source === 'source2' && destination === 'destination1') {
      return 25;
    } else if (source === 'source2' && destination === 'destination2') {
      return 30;
    } else {
      // Default fare if no specific combination is matched
      return 10;
    }
  };

  // Function for form validation
  const isFormValid = () => {
    const isValidEmail = validator.isEmail(formData.email);
    const isValidName = validator.isAlpha(formData.name); // removes spaces for isAlpha
    const isValidAge = validator.isInt(formData.age);

    if (validator.isEmpty(formData.source.trim())) {
      alert('Please select a source.');
      return false;
    }

    if (validator.isEmpty(formData.destination.trim())) {
      alert('Please select a destination.');
      return false;
    }

    if (!isValidName) {
      alert('Please enter a valid name (only letters and spaces).');
      return false;
    }

    if (!isValidAge) {
      alert('Please enter a valid age (only numbers).');
      return false;
    }

    if (!isValidEmail) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  return (
    <div className='App'>
      <h1>Train Booking Form</h1>
      <form onSubmit={handleSubmit}>
      <br></br>
          Source:
          <select name="source" value={formData.source} onChange={handleInputChange}>
            <option value="">Select Source</option>
            <option value="source1">Source 1</option>
            <option value="source2">Source 2</option>
          </select>
          <br></br>
        <br></br>
          Destination:
          <select name="destination" value={formData.destination} onChange={handleInputChange}>
            <option value="">Select Destination</option>
            <option value="destination1">Destination 1</option>
            <option value="destination2">Destination 2</option>
          </select>
          <br></br>

          <br></br>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          <br></br>

          <br></br>
          Age:
          <input type="text" name="age" value={formData.age} onChange={handleInputChange} />
          <br></br>

          <br></br>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
          <br></br>

       
          <br></br>
          Gender:
          <div>
          <br></br>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleInputChange}
              />
              Male
              <br></br>
              <br></br>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleInputChange}
              />
              Female
              <br></br>
              <br></br>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleInputChange}
              />
              Other
              <br></br>
          </div>
          <br></br>

          <br></br>
          Insurance:
          <input
            type="checkbox"
            name="insurance"
            checked={formData.insurance}
            onChange={handleInputChange}
          />
       <br></br>
       <br></br>
        <button type="submit">
          Book Train
        </button>
      </form>

      {fare > 0 && (
        <div>
          <h2>Booking Details</h2>
          <p>Source: {formData.source}</p>
          <p>Destination: {formData.destination}</p>
          <p>Name: {formData.name}</p>
          <p>Age: {formData.age}</p>
          <p>Email: {formData.email}</p>
          <p>Gender: {formData.gender}</p>
          <p>Fare: ${fare}</p>
        </div>
      )}
    </div>
  );
};

export default TrainBookingForm;
