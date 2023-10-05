import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { NavLink } from 'react-bootstrap';
import './CardDetails.css'
import { addtocart,removeFromCart } from '../../Redux/CartSlice/CartSlice';


const CardsDetails = () => {
  const [userData, setuserData] = useState([])
  // console.log(userData)

  const dispatch = useDispatch()
  const productHistory = useNavigate()


  const { id } = useParams()
  // console.log(id)


  const counData = useSelector((state) => state.cart.cart)
  // console.log(counData)

  const CompareData = () => {
    let usersData = counData.filter((e) => {
      console.log(e)
      return e.id == id
    })        
    // console.log(usersData)
    setuserData(usersData)
  }

  const senDatatoCart = (selectedItem)=>{
    dispatch(addtocart(selectedItem))
}

  const removeItem = (element)=>{
    dispatch(removeFromCart({id:element.id}))         
    productHistory("/")
  }
  

  useEffect(() => {
    CompareData()
  },[id])


  
  return (
    <>
      <div className='CardDetails-container'>
        <h2 className='container-text'>Item Details Page</h2>
        <section className='details-container'>
          {
            userData.map((ele,id)=>{
              console.log(ele)
              return(
                <>
                <div className='itemDetails' key={ele.id}>
                 <div className='items_img'>
                  <NavLink to='/itemDetails'>
                    <img src={ele.imgdata} alt='error' className='item_img' />
                  </NavLink>
                  </div>

                  <div className='product-details'>
                    <Table>
                      <tr>
                        <td>
                          <p><strong>Restrarunt</strong> : {ele.rname}</p>
                          <p><strong>Price</strong> : ₹{ele.price}</p>
                          <p><strong>Dishes</strong> : {ele.address}</p>
                          <p><strong>Total</strong> : {ele.price * ele.qnty}</p>
                          
                        </td>
                        <td>
                          <p><strong>Rating</strong> : <span className='rating'>{ele.rating} ★</span></p>
                          <p><strong>Order Review</strong> : <span>{ele.somedata}</span></p>
                          <p><strong>Remove</strong> : <span>
                            <i className='fas fa-trash trash-icon' onClick={removeItem}></i>
                            </span></p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </div>
               </>
              )
            })
          }
                 

        </section>
      </div>
    </>
  )
}

export default CardsDetails