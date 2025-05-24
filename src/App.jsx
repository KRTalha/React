
import {HomePage} from './pages/HomePage'
import './App.css'
import { Routes,Route } from 'react-router'


function App() {
  

  return (
   
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<p>Test for Routing</p>} />

    </Routes>
      
   
  )
}

export default App
