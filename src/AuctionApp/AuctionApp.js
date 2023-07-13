import React, { useState } from 'react';
import './AuctionApp.css';

const AuctionItem = ({ item, onBid }) => {
  const [bidAmount, setBidAmount] = useState(0);

  const handleBidChange = (e) => {
    setBidAmount(parseInt(e.target.value));
  };

  const handleBidSubmit = () => {
    onBid(item.id, bidAmount);
    setBidAmount(0);
  };

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Current Bid: ${item.currentBid}</p>
      <input type="number" value={bidAmount} onChange={handleBidChange} />
      <button onClick={handleBidSubmit}>Place Bid</button>
    </div>
  );
};

const AuctionList = ({ items, onBid }) => {
  return (
    <div>
      <h2>Auction Items</h2>
      {items.map((item) => (
        <AuctionItem key={item.id} item={item} onBid={onBid} />
      ))}
    </div>
  );
};

const AuctionApp = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', currentBid: 100 },
    { id: 2, name: 'Item 2', currentBid: 150 },
    { id: 3, name: 'Item 3', currentBid: 200 },
  ]);

  const handleBid = (itemId, bidAmount) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            currentBid: bidAmount > item.currentBid ? bidAmount : item.currentBid,
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <h1>Online Auction</h1>
      <AuctionList items={items} onBid={handleBid} />
    </div>
  );
};

export default AuctionApp;
