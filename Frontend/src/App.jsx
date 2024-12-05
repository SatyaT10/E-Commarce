import { useEffect, useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HomeBanner'
import CardData from './components/CardData'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Login from './components/login'
import Signup from './components/signup'
import UserProfile from './components/ProfilePage'
import Admin from './components/Admin/AdminPanel'
import AllOrder from './components/Admin/AllOrders'
import NewProduct from './components/Admin/NewProduct'
import ViewProducts from './components/Admin/ViewProduct'
import UpdateProduct from './components/Admin/UpdateProduct'
import DeleteProduct from './components/Admin/DeleteProduct'
import WishListCart from './components/WishList'

function App() {


  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/allorder" element={<AllOrder />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/view-products" element={<ViewProducts />} />
        <Route path="/update-product/:id" element={<UpdateProduct/>} />
        <Route path="/delete/:id" element={<DeleteProduct/>} />
        <Route path="/wishlist" element={<WishListCart />} />
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Signup />} ></Route>
        <Route path="/profile" element={<UserProfile />} ></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
