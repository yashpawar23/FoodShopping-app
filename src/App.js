import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/NavBar/Header'
import {  Routes, Route } from 'react-router-dom'
import Cards from './Component/Display/Card/Card'
import CardsDetails from './Component/Display/CardDetails/CardDetails'
import PaymentCard from './Component/Display/PaymentCard/PaymentCard';
import SignUp from './Component/Display/SignupLogIn/SignUp';
import LogIn from './Component/Display/Login/LogIn';


const App = () => {
  return (
    <div>
     
      <Header />
      <Routes>
        <Route path='/' element={<Cards/>} />
        <Route path='/payment' element={<PaymentCard/>}/>
        <Route path='/cart/:id' element={<CardsDetails/>} />
        <Route path='/Signup' element={<SignUp/>}/>
        <Route path='logIn' element={<LogIn/>}/>
        <Route path='sign-up' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
