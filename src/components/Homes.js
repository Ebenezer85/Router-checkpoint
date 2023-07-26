import React from 'react'
import { Link } from 'react-router-dom'

const Homes = () => {
  return (
    <div>
        <h1>Welcome to the Home Page</h1>
        <nav>
            <li>
                <Link to='/'>home</Link>
            </li>
        </nav>
        <nav>
            <li>
                <Link to='About/'>about</Link>
            </li>
        </nav>
        <nav>
            <li>
                <Link to='/Contact'>contact</Link>
            </li>
        </nav>
    </div>
  )
}

export default Homes
