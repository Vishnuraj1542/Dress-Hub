import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from './components/navbar.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import WishList from './pages/WishList.jsx'

function App() {
  return (
    <div className='bg-dblue'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
      </Routes>
      </BrowserRouter>

      
    </div>
    
  )
}

export default App
