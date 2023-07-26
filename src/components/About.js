import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1>This is the about page</h1>
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

export default About