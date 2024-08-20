import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Signin from './Signin'
import Cart from './Cart'
import Productdescription from './Productdescription'
import Product from './Product'
// import Addtocart from './Addtocart'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        
        <Route path='/Product' element={
          
          <Product/>
          
          }></Route>

        <Route path='/Signin' element={<Signin/>}> </Route>
        <Route path='/Cart' element={<Cart/>}> </Route>
        

        <Route path='/Productdescription/:id' element={<Productdescription/>}></Route>

      </Routes>
    </div>
  )
}

export default AllRoutes
