import { useState } from 'react'
import { checkoutHandler } from '../view/payment';



function Fileorder() {

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(true);
    const [total, setTotal] = useState(1);

    const amount = 9;


    const handleChange = event => {

        setCount(event.target.value);

        if (isNaN(count)) {
            setNumber(false);
        } else {
            setNumber(true)
        }


    };

    return (

        <div className='flex justify-center items-center mt-20'>

            <div className='flex justify-center flex-col items-start shadow-lg rounded-lg w-[350px] h-[100%] pb-20 p-10'>

                <div className='px-4 pl-2'>
                    <p className='my-2 text-lg text-primary font-medium text-left' >Product: <span className='text-secondary'>Files</span></p>
                    <p className='my-2 text-lg text-primary font-medium text-left'>Rate: ₹ <span className='text-secondary'>{amount}</span></p>
                </div>

                <div className='pl-2'>

                    <label className='text-gray-700 text-sm pt-6'>Enter number of Files</label>

                    <input name="file" type="text" className="w-full my-2 pl-3 py-1 mb-3 text-base outline-1 border border-slate-700 rounded-sm outline-none" onChange={handleChange}
                        value={count}
                        placeholder='Enter File requrement'
                        autocomplete="off"
                    />




                    {/* Error if not number in input */}

                    {
                        !number && <p className='text-red-600 py-3'>please enter valid number</p>
                    }



                    {/* total  amount */}
                    <p className='my-2 text-lg text-primary font-medium text-left'>Total: <span>{amount * count}</span> </p>


                    {/* order button */}
                    <p className='bg-primary py-2  px-6 text-white rounded-md mt-4 text-center hover:cursor-pointer' onClick={
                        () => {
                            const pa = amount * count;
                            !isNaN(pa) && pa > 0 && checkoutHandler(pa)
                        }}>Order</p>


                </div>


            </div>
        </div>
    )
}

export default Fileorder