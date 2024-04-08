import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';

const cardDetails = {
  number: "4111 1111 1111 1111",
  name: "John Doe",
  expiry: "05/22",
  cvc: "123",
  type: "visa"
};

function CreditCard() {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
      });
    
      const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        
        setState((prev) => ({ ...prev, [name]: value }));
      }
    
      const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
      }
    
      return (
        <div>
          <Cards
            number={state.number}
            expiry={state.expiry}
            cvc={state.cvc}
            name={state.name}
            focused={state.focus}
          />
          <form>
            <input
              type="number"
              name="number"
              placeholder="Card Number"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </form>
        </div>
      );
    
}

export default CreditCard