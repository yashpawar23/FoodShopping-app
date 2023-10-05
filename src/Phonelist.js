import React, {useContext} from "react";

import {cartContext} from './contex'

function PhoneList() {
    const [mobiles] = useContext(cartContext);
    return (
      <div className="phone-list-container">
        {mobiles.map((mobile) => (
          <Phone mobile={mobile} key={mobile._id} />
        ))}
      </div>
    );
  }
  
  function Phone({ mobile }) {
    const [, , updateCart] = useContext(cartContext);
  
    return (
      <div className="phone-container">
        <img src={mobile.img} alt={mobile.model} className="phone-img" />
        <h2 className="phone-model">{mobile.model} </h2>
        <p className="phone-price">{mobile.price}</p>
        <h4 className="phone-company">{mobile.company}</h4>
        <button
          className="phone-add-to-cart"
          onClick={() => updateCart({ mobile, type: "increment" })}
        >
          Add-to-cart
        </button>
      </div>
    );
  }
  export default PhoneList