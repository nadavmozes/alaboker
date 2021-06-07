import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 75) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll',changeBackground)
    return (
        <div className={`${navbar ? 'navbar active' : 'navbar'} bg-light rtl`} >
            <h1 style={{ letterSpacing: '0.7px' }}>
                🍳על-הבוקר
            </h1>
            <ul>
                <li><Link to='/' className="dark-link">דף הבית</Link></li>
                <li><Link to='/about' className="dark-link">אודות</Link></li>
            </ul>
        </div>
    )
}
export default Navbar
