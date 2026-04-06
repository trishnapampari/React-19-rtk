import React from 'react'
import Cart from './Cart'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
          <header className="header">

              <div className="logo">MyApp</div>
              <nav className="nav">
                  <li> <Link to="/">Home</Link></li>
              </nav>
              <Cart/>
          </header>
    </div>
  )
}
