import React from "react";
import "./App.css";

function App() {

  // Office Object
  const office = {
    Name: "DBS Business Center",
    Rent: 55000,
    Address: "Hyderabad"
  };

  // Office List
  const offices = [
    {
      Name: "DBS Business Center",
      Rent: 55000,
      Address: "Hyderabad"
    },
    {
      Name: "Smart Work",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "CoWork Hub",
      Rent: 45000,
      Address: "Chennai"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
        alt="Office"
        width="500"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p style={{ color: office.Rent < 60000 ? "red" : "green" }}>
        <b>Rent:</b> Rs. {office.Rent}
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Office List</h2>

      {
        offices.map((item, index) => (

          <div key={index} className="card">

            <h3>{item.Name}</h3>

            <p
              style={{
                color: item.Rent < 60000 ? "red" : "green"
              }}
            >
              Rent: Rs. {item.Rent}
            </p>

            <p>Address: {item.Address}</p>

          </div>

        ))
      }

    </div>
  );
}

export default App;