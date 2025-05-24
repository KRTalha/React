
import {HomePage} from './pages/HomePage'
import {Checkout} from './pages/CheckoutPage'
import './App.css'
import { Routes,Route } from 'react-router'


function App() {
  

  return (
   
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<Checkout />} />

    </Routes>
      
   
  )
}

export default App
