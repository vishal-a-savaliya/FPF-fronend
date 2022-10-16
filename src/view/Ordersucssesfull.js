import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Ordersucssesfull() {

    const seachQuery = useSearchParams()[0]

    const paymentID = seachQuery.get("reference")
    const productName = seachQuery.get("product")
    const paymentDate = seachQuery.get("date")
    const total = seachQuery.get("total")


    return (
        <div className='flex justify-center items-center mt-16'>
            <div className='p-4 shadow-2xl rounded-lg px-8 py-10 w-[300px]'>

                <p className='text-center py-1 text-green-400'>great!</p>
                <h1 className='text-center py-4 text-gray-900 text-2xl mb-5'>Payment Success</h1>

                <ul className='text-sm'>
                    <li className='px-2 py-2 flex justify-between text-gray-600 text-sm'><span>Product:</span> <span className='text-gray-900 font-semibold'>{productName}</span></li>
                    <li className='px-2 py-2 flex justify-between text-gray-600 text-sm'><span>Payment Date:</span> <span className='text-gray-900 font-semibold'>{paymentDate}</span></li>
                    <li className='px-2 py-2 mt-4 flex justify-between text-gray-600 text-sm flex-col '><span>Payment ID</span> <span className='text-gray-900 font-semibold py-2'>{paymentID}</span></li>
                </ul>

                <div className='mb-4 mt-8'>
                    <h1 className='text-sm text-gray-500 text-center'>Total pay</h1>
                    <h1 className='text-green-400 text-center text-lg py-2 font-medium'>{total}</h1>
                </div>
            </div>
        </div>
    )
}

export default Ordersucssesfull