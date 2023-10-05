import React, { useState } from 'react'
import './CartItemBdge.css'
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { removeFromCart, addtocart, decreaseQuantity } from '../../Redux/CartSlice/CartSlice';



const CartItemBadge = () => {

    const dispatch = useDispatch()

    const counData = useSelector((state) => state.cart.cart)
    console.log(counData)

    const [isFalse,setIsFalse] = useState(true)
    const handleClose = ()=>{
        setIsFalse(false)
    }

    return (
        <>
            {isFalse &&
             <div className='card_details'>
                <Table>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Restraurant Name</th>
                            <th  > <i class="fa-solid fa-xmark" onClick={handleClose}></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            counData.map((e, id) => {
                                return (
                                    <>
                                        <tr key={e.id}>
                                            <td>
                                                <NavLink to={`/cart/${e.id}`} >
                                                    <img src={e.imgdata} className='cartItemImg' alt='error' />
                                                </NavLink>
                                            </td>
                                            <td>
                                                <p className='cartProduct-details'>{e.rname}</p>
                                                <p className='cartProduct-details'><strong>Price</strong> :₹ {e.price}</p>
                                                <p className='cartProduct-details'><strong>Qunantity</strong> : {e.qnty}</p>
                                                <p className='removeFromCartIcon' >
                                                    <i className='fas fa-trash  ' onClick={() => dispatch(removeFromCart({ id: e.id }))}></i>
                                                </p>
                                                <div className='quantityIcons-mainwrapper'>
                                                    <div className='qnt-icons-wrapper'>
                                                        <span className='quntity-icon' onClick={() => dispatch(decreaseQuantity(e))}>-</span>
                                                        <span className='quntity-count'>{e.qnty}</span>
                                                        <span className='quntity-icon' onClick={() => dispatch(addtocart(e))}>+</span>
                                                    </div>
                                                    <div className='text-center m-0 cartQnty-total'><strong>Total</strong> : ₹ {e.price * e.qnty}</div>
                                                </div>

                                            </td>

                                        </tr>

                                    </>

                                )
                            })
                        }
                        <tr className='subTotal-wrapper'>
                            <Link to='/payment'>
                                <Button variant="primary" className='payment_btn' >Payment</Button>
                            </Link>
                            <p></p>
                        </tr>

                    </tbody>
                </Table>
            </div>
}
        </>
    )
}

export default CartItemBadge