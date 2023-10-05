// src/components/MainPage.js
import React, { useState } from 'react';
import './MainPage.css'; // Import the CSS file

function MainPage({ onLogout }) {
  const [items, setItems] = useState([]); // State to store the items
  const [inputItem, setInputItem] = useState(''); // State to capture user input
  const [selectedItem, setSelectedItem] = useState(null); // State to store the randomly selected item

  // Function to add an item to the array
  const addItem = () => {
    if (inputItem.trim() === '') {
      return;
    }

    if (items.length < 6) {
      setItems([...items, inputItem]);
      setInputItem('');
    } else {
      alert('You can only add up to 6 items.');
    }
  };

  // Function to select a random item from the array
  const selectRandomItem = () => {
    if (items.length === 0) {
      alert('No items to select from.');
      return;
    }

    const randomIndex = Math.floor(Math.random() * items.length);
    setSelectedItem(items[randomIndex]);
  };

  return (
    <div className="main-container"> {/* Apply the CSS class */}
      <h2>Main Page</h2>
      <button className="logout-button" onClick={onLogout}>Logout</button> {/* Apply the CSS class */}
      
      {/* Input for adding items */}
      <div>
        <input
          type="text"
          placeholder="Enter an item"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      
      {/* Display the list of items */}
      <div>
        <h3>Items:</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>Total Items: {items.length}</p>
      </div>
      
      {/* Button to randomly select an item */}
      <div>
        <button onClick={selectRandomItem}>Select Random Item</button>
        {selectedItem && (
          <p>Selected Item: {selectedItem}</p>
        )}
      </div>
    </div>
  );
}

export default MainPage;
