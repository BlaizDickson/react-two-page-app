// src/components/MainPage.js
import React, { useState } from 'react';
// import './MainPage.css'; // Import the CSS file

function MainPage({ onLogout }) {
  const [Names, setNames] = useState([]); // State to store the Names
  const [inputName, setInputName] = useState(''); // State to capture user input
  const [selectedName, setSelectedName] = useState(null); // State to store the randomly selected Name

  // Function to add an Name to the array
  const addName = () => {
    if (inputName.trim() === '') {
      return;
    }

    if (Names.length < 6) {
      setNames([...Names, inputName]);
      setInputName('');
    } else {
      alert('You can only add up to 6 Names.');
    }
  };

  // Function to select a random Name from the array
  const selectRandomName = () => {
    if (Names.length === 0) {
      alert('No Names to select from.');
      return;
    }

    const randomIndex = Math.floor(Math.random() * Names.length);
    setSelectedName(Names[randomIndex]);
  };

  return (
    <div className="main-container"> {/* Apply the CSS class */}
      <h2>Main Page</h2>
      <button className="logout-button" onClick={onLogout}>Logout</button> {/* Apply the CSS class */}
      
      {/* Input for adding Names */}
      <div>
        <input
          type="text"
          placeholder="Enter a Name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={addName}>Add Name</button>
      </div>
      
      {/* Display the list of Names */}
      <div>
        <h3>Names:</h3>
        <ul>
          {Names.map((Name, index) => (
            <li key={index}>{Name}</li>
          ))}
        </ul>
        <p>Total Names: {Names.length}</p>
      </div>
      
      {/* Button to randomly select an Name */}
      <div>
        <button onClick={selectRandomName}>Select Random Name</button>
        {selectedName && (
          <p>Selected Name: {selectedName}</p>
        )}
      </div>
    </div>
  );
}

export default MainPage;
