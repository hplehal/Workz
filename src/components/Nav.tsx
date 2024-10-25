// import { useState } from 'react'
import './Nav.css'

function Nav() {
//   const [count, setCount] = useState(0)

  return (
    <nav className="nav-bar">
        <div className='nav-header'>
            <h1>Workz</h1>
        </div>
        <div>
            <input type="text" name="trades-input" id="" />
        </div>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li>
                <a href="#">Login</a>
            </li>
            <li>
                <a href="#">Sign Up</a>
            </li>
            <li>
                <a href="#">{/* <i className="fas fa-user"></i> */}User</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
