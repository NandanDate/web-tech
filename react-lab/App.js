import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrainBookingForm from './components/trainbook.component';
import BookingDetails from './components/information.component';
import Navbar from './components/navbar';

function App() {
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBookingSubmit = (data) => {
    setBookingDetails(data);
  };

  return (
    <Router>
      <div className="App">
  
          <h1>Train Booking App</h1>
          <Navbar />
       
        
          <Routes>
            <Route
              path="/booking"
              element={<TrainBookingForm onSubmit={handleBookingSubmit} />}
            />
            <Route
              path="/details"
              element={
                bookingDetails ? (
                  <BookingDetails bookingDetails={bookingDetails} />
                ) : (
                  <p>No booking details available</p>
                )
              }
            />
            <Route
              path="/"
              element={<p>Welcome to the Train Booking App! Select an option from the navbar.</p>}
            />
          </Routes>
       
      </div>
    </Router>
  );
}

export default App;
