import React from 'react'
import { Link } from 'react-router-dom'

import {
    HomeIcon,
    QuestionMarkCircleIcon,
    ShoppingBagIcon,

} from '@heroicons/react/24/outline'

function Profile() {
    return (
        <div className='w-[30%] max-w-[350px] h-screen bg-secondary p-4'>

            <div className='my-10 mx-4'>
                <h1 className='text-2xl font-semibold '>Vishal savaliya</h1>
                <p className='text-sm'>vsleitan@gmail.com</p>
                <p className='text-sm'>9510324875</p>
            </div>
            <div>
                <ul className='flex flex-col mx-3'>
                    <Link className='nav-link' to="/"><HomeIcon className='w-6 h-6 mr-4' /> home</Link>
                    <Link className='nav-link' to="/orders"><ShoppingBagIcon className='w-6 h-6 mr-4' /> orders </Link>
                    <Link className='nav-link' to="/help"><QuestionMarkCircleIcon className='w-6 h-6 mr-4' />help</Link>
                    <Link className='flex bg-primary py-3 justify-center rounded-md my-2 text-white font-medium shadow-lg' to="/">Log out</Link>
                </ul>
            </div>

        </div>
    )
}

export default Profile