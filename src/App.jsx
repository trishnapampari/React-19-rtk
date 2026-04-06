import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import CartList from './components/CartList'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>
  
   <Header/>
   
   <Routes>
    <Route path='/' element={ <Product/> }></Route>
    <Route path='/cart' element={ <CartList/> }></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
