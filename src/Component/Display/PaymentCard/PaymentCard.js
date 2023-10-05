import React, { useState } from 'react'
import './PaymentCard.css'
import { useSelector } from 'react-redux';
import NetBanking from '../PaymentCard/Images/32302.webp'
import CDA from '../PaymentCard/Images/png-transparent-visa-mastercard-logo-visa-mastercard-computer-icons-visa-text-payment-logo.png'
import UpiImg from '../PaymentCard/Images/Google-Pay-PhonePe.webp'
import Cashon from '../PaymentCard/Images/cash-delivery_569841-162.avif'

const PaymentCard = () => {


  const counData = useSelector((state) => state.cart.cart)
  console.log(counData)

  const Total = useSelector((state)=>state.Total.total_price)

  return (
       <div className='paymentOption_wrapper'>
       <div className='paymentoption_div'>
        <h3>Payment Options</h3>
       <form>
       <input type='radio' id='upi' value='UPI' name='payment-mode'></input> 
       <img src={UpiImg} alt='' className='paymentmode_img'/>
       <label for='upi'>UPI</label><br/><br/>

       <input type='radio' id='cda' value='CDA' name='payment-mode'></input>
       <img src={CDA} alt='' className='paymentmode_img'/>
       <label for='cda'>Credit / Debit / ATM Card</label><br/><br/>

       <input type='radio' id='netbanking'value='NETBANKING' name='payment-mode'></input>
       <img src={NetBanking} alt='' className='paymentmode_img'/>
       <label for='netbanking'>Net Banking</label><br/><br/>

       <input type='radio' id='cash' value='CASH' name='payment-mode'></input>
       <img src={Cashon} alt='' className='paymentmode_img'/>
       <label for='cash'>Cash On Delievery</label>
       </form>
       </div>

       <div>
        <h3>Price Details</h3>
        <hr></hr>
        <p>Price</p>
        <p>Qunantity</p>
        <hr></hr>
        <p>TotalPayable{Total}</p>
       </div>
       </div>
  )
}

export default PaymentCard