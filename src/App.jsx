import React from 'react'
import About from './Pages/About'
import AllergyAdvice from './Pages/AllergyAdvice'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import Services from './Pages/Services'
import Footer from './Pages/Footer'
import Navigation from './Navbar/Navigation'
import ProductDescription from './Pages/ProductDescription'
import CartPage from './Pages/CartPage'
import Payment from './Payment/Payment'
import Login from './Auth/Login'
import Sucess from './Payment/Sucess'
import Failure from './Payment/Failure'
import Signup from './Auth/Signup'
import Profile from './Auth/Profile'
import ProtectedRoutes from './Auth/ProtctedRoutes'

function App() {
  return (
    <div>
      <Navigation />
      <Routes>

        <Route path='/' element={<ProtectedRoutes  components={ <Home/>}/>}/>
        <Route path='/about' element={<ProtectedRoutes  components={ <Home/>}/>} />
        <Route path='/allergyadvice' element={<ProtectedRoutes  components={ <Home/>}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/menu" element={ <Menu/>}/>
        <Route path='/services' element={<ProtectedRoutes  components={ <Home/>}/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/sucess' element={<Sucess />} />
        <Route path='/failure' element={<Failure />} />
        <Route path='/productdescription/:id' element={<ProductDescription />} />
        <Route path='/cartPage' element={<ProtectedRoutes  components={ <Home/>}/>}/>
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;