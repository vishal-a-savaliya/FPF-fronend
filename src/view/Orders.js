import { useState } from 'react'


function Orders() {

    const [ordersdetails, setOrders] = useState([
        {
            orderid: 123456789,
            name: 'files',
            quantity: '5',
            price: '10',
            total: '50',
            sucsses: true,
            date: "11-6-2020"
        },
        {
            orderid: 123456789,
            name: 'files',
            quantity: '5',
            price: '10',
            total: '50',
            sucsses: true,
            date: "11-6-2020"
        },
        {
            orderid: 123456789,
            name: 'files',
            quantity: '5',
            price: '10',
            total: '50',
            sucsses: false,
            date: "11-6-2020"
        },
        {
            orderid: 123456789,
            name: 'files',
            quantity: '5',
            price: '10',
            total: '50',
            sucsses: true,
            date: "11-6-2020"
        },

    ])

    return (

        <div className='mt-20'>

            <h1 className='text-xl text-center font-medium'>My Orders</h1>
            <p className='mx-auto mt-2 border-b-2 border-collapse border-primary w-10 mb-10'></p>

            {
                ordersdetails.map((item) =>
                (
                    <div className='flex flex-col rounded-md shadow-md  w-[80%] max-w-[800px] mx-auto my-8 bg-[#f3f3f460] py-8 px-4 md:px-10'>

                        <div className='flex justify-between'>
                            <h1 className='text-sm'>Order ID : <span className='text-sm'>{item.orderid}</span></h1>
                            <h1 className='text-sm'>{item.date}</h1>
                        </div>


                        <div className='flex flex-col mt-4'>

                            <div>
                                <p>Product Details</p>
                            </div>

                            <hr className='text-secondary h-1'></hr>

                            <div className='flex justify-between mt-2'>
                                <h1>{item.name}</h1>
                                <div>
                                    <h1><span>Price : </span>{item.quantity} X {item.price} =  <span>{item.total}</span> </h1>
                                </div>
                            </div>
                        </div>


                        <div className='flex justify-end mt-2'>
                            {item.sucsses ? (<p className='text-green-400'>Sucsses</p>) : (<p className='text-red-500 '>Failed</p>)}
                        </div>


                    </div>
                )
                )
            }

        </div>

    )


}

export default Orders;