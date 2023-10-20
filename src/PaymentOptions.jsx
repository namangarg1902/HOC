import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentOptions.css';

const PaymentOptions = () => {
  const paymentMethods = [
    { name: 'Pay with UPI', method: 'upi' },
    { name: 'Pay with Paytm', method: 'credit-card' },
    { name: 'Pay with Gpay', method: 'credit-card' },
    { name: 'Pay with CipherPay', method: 'credit-card' },
    // Add more payment options here
  ];

  return (
      <div className="payment-options-container">
      <div className="payment-methods">
        <h2>Select Payment Method</h2>
        <ul className='List'>
          {paymentMethods.map((option) => (
            <li className='Item' key={option.method}>
              <Link to={`/payment/${option.method}`}>{option.name}</Link>
              </li>
          ))}
        </ul>
      </div>
      <div className="card-details">
        <h2>Card Details</h2>
            <div className="form">
            <form action="">
              <label htmlFor="CardDetails">Card Details</label><br />
              <input type="text" name='CardDetails'/><br />
              <label htmlFor="Expiry">Expiry</label><br />
              <input type="text" name='Expiry'/><br />
              <label htmlFor="CVV">CVV</label><br />
              <input type="text" name='CVV'/><br />
            </form>
            </div>
      </div>
    </div>
  );
};

export default PaymentOptions;