// BidsDetails.js

import React from 'react';


const BidsDetails = ({ bids }) => {
  return (
    <div>
      <h2>Bids Details</h2>
      <ul>
        {bids.map((bid, index) => (
          <li key={index}>
            <strong>Bidder:</strong> {bid.bidder} | <strong>Amount:</strong> {bid.amount} |{' '}
            <strong>Timestamp:</strong> {bid.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BidsDetails;
