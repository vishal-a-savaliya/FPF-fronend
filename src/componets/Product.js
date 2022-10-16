import React from 'react'
import { Link } from 'react-router-dom'

function Product({ title, color, svg, description, nav }) {

    return (

        <Link to={nav} >
            <div className={`w-[160px] h-[170px] text-gray-900 rounded-md flex items-start flex-col mb-4 shadow-md shadow-slate-400 hover:cursor-pointer`} style={{ backgroundColor: color }} >

                <div >
                    <img src={svg} alt="icon" className='h-10 w-10 p-2 flex-shrink-0 text-slate-900 bg-white m-4 rounded-md' />
                </div>

                <h1 className='text-white text-lg font-semibold text-left px-4'>{title}</h1>
                <h1 className='text-white text-sm font-base text-left px-4 py-1'>{description}</h1>


            </div>
        </Link>
    )
}

export default Product