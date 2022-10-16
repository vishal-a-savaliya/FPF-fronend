import React from 'react'
import { useState } from 'react'
import { checkoutHandler } from '../view/payment';

function Xerox() {


    const [counter, setCounter] = useState(1);
    const [totalpage, setTotalPage] = useState(0);
    const [inputPage, setInputPage] = useState([]);

    const handleplusbutton = () => {
        setCounter(counter + 1);
        // console.log(counter);
    };


    const fileHander = (e) => {

        var input = e.target;
        var reader = new FileReader();
        reader.readAsBinaryString(input.files[0]);
        reader.onloadend = function () {
            var count = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
            console.log('Number of Pages:', count);
            setTotalPage(totalpage + count)

            setInputPage()
        }

        // console.log(input.files[0].name)
    }


    return (

        // <div> Xerox </div>
        <div className='flex justify-center items-center mt-20'>

            <div className='flex justify-center flex-col items-start shadow-lg rounded-lg w-[350px] h-[100%] pb-20 p-10'>


                {/* title */}

                <div className='px-4 pl-2'>
                    <p className='my-2 text-lg text-primary font-medium text-left' >Xerox <span className='text-secondary'></span></p>
                    <p className='my-2 text-lg text-primary font-medium text-left'> Rate : ₹ <span className='text-secondary text-base'>{0.85} per page</span></p>
                </div>


                {/* Inputes */}

                <div className='pl-2'>

                    <label className='text-gray-700 text-sm pt-6'>Upload your files here</label>

                    <div>
                        {Array.from(Array(counter)).map((c, index) => {
                            return <input type="file" accept=".pdf" required id="files" onChange={fileHander} />;
                        })}
                    </div>

                    <button onClick={handleplusbutton}>ADD MORE FILES</button>


                    {/* <input name="file" type="text" className="w-full my-2 pl-3 py-1 mb-3 text-base outline-1 border border-slate-700 rounded-sm outline-none" onChange={handleChange}
                        value={count}
                        placeholder='Enter File requrement'
                        autocomplete="off"
                    /> */}

                    {/* {
                        !number && <p className='text-red-600 py-3'>please enter valid number</p>
                    } */}

                    <p className='my-2 text-lg text-primary font-medium text-left'>Total Pages: <span id='result'>{totalpage}</span> </p>
                    <p className='my-2 text-lg text-primary font-medium text-left'>Total: <span id='result'>{Math.trunc(totalpage * 0.85)}</span> </p>

                    <p className='bg-primary py-2  px-6 text-white rounded-md mt-4 text-center hover:cursor-pointer' onClick={
                        () => {
                            const price = parseInt(0.85 * totalpage);
                            // console.log(typeof (price))
                            const pa = Math.trunc(price);
                            !isNaN(pa) && pa > 0 && checkoutHandler(pa)
                        }}>Order</p>

                </div>

            </div>
        </div>
    )
}

export default Xerox