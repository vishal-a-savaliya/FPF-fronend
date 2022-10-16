import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

import {
    HomeIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline'

import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav className='mb-6 sm:mb-3'>
            <Link to="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HomeIcon className='w-6 h-6' /></Link>
            <Link to="/orders" onClick={() => setActiveNav('#orders')} className={activeNav === '#orders' ? 'active' : ''}><ShoppingBagIcon className='w-6 h-6' /></Link>
            <Link to="/profile" onClick={() => setActiveNav('#profile')} className={activeNav === '#profile' ? 'active' : ''}><UserCircleIcon className='w-6 h-6' /></Link>
            <Link to="/help" onClick={() => setActiveNav('#help')} className={activeNav === '#help' ? 'active' : ''}><QuestionMarkCircleIcon className='w-6 h-6' /></Link>
        </nav>
    )
}

export default Nav;