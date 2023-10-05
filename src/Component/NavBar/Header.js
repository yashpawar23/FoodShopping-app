import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartItemBadge from '../Display/CartItemBadge/CartItemBadge';




const Header = () => {

  // const [price, setPrice] = useState(0)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const counData = useSelector((state) => state.cart.cart)
  console.log(counData)


  // const total = () => {
  //   let price = 0
  //   counData.map((ele, id) => {
  //     price = ele.price + price
  //   })
  //   setPrice(price)
  // }

  // useEffect(() => {
  //   total()
  // }, [total])




  return (

    <Navbar bg="dark" data-bs-theme="dark" className='navBarwrapper'>
      <Container>
        <NavLink className='text-light' >Veganic Corner</NavLink>
        <Nav className="me-auto">
          <NavLink to='/' className='text-light home-icon ' >Home</NavLink>
        </Nav>
       <Link to='./Signup'>
       <Button className = "Signup_btn"><i class="fa-solid fa-user signup-icn">SignUp</i></Button>
       </Link>

        {/* cart icon */}
        <Badge badgeContent={counData.length} color="primary"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <i className="fa-solid fa-cart-shopping  cart-icon" style={{ fontSize: 25 }}></i>
        </Badge>
      </Container>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          counData.length ?
            <CartItemBadge/>
            :
            <div className='cart_icon-click'>
              <p>Your card is empty</p>
              <i className='fas fa-close smallclose' onClick={handleClose}> </i>
            </div>
            
        }

      </Menu>

        
    </Navbar>
  )
}

export default Header