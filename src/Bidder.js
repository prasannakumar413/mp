// Bidder.js

import React, { useState } from 'react';
import './Bidder.css';

const Bidder = ({ addBid }) => {
  const [bidAmount, setBidAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bidAmount !== '') {
      const newBid = {
        amount: bidAmount,
        bidder: 'Bidder',
        timestamp: new Date().toLocaleString(),
      };
      addBid(newBid);
      setBidAmount('');
    }
  };

  return (
    <div>
      <h2>Bidder</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter bid amount"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
        />
        <button type="submit">Place Bid</button>
      </form>
    </div>
  );
};

export default Bidder;
