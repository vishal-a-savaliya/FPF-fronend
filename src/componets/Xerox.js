import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useEffect } from "react";
import { useState } from "react";
import { checkoutHandler } from "../view/payment";

function Xerox() {
    const [counter, setCounter] = useState(1); // number of inputs
    const [totalpage, setTotalPage] = useState(0); // number of totle pages
    const [fileInput, setFileInput] = useState([]); // actual input tags
    const [pages, setPages] = useState([0]); // number of pages in each input

    const handleplusbutton = () => {
        setCounter((prev) => prev + 1);
        let newPages = [...pages];
        newPages.push(0);
        setPages(newPages);

        // generating input from here so i can pass index to the fileHandler function
        setFileInput(
            Array.from(Array(counter + 1)).map((c, index) => {
                return (
                    <input
                        key={index}
                        type='file'
                        accept='.pdf'
                        required
                        id='files'
                        onChange={(e) => fileHandler(e, index)}
                        className='w-[270px]'
                    />
                );
            })
        );
    };

    // initially generate 1st input
    useEffect(() => {
        setFileInput(
            Array.from(Array(1)).map((c, index) => {
                return (
                    <input
                        key={index}
                        type='file'
                        accept='.pdf'
                        required
                        id='files'
                        onChange={(e) => fileHandler(e, index)}
                        className='w-[260px]'
                    />
                );
            })
        );
    }, []);

    const fileHandler = (e, key) => {
        const input = e.target;

        if (input.files.length === 0) {
            setPages((prevPages) => {
                let newPages = [...prevPages];
                newPages[key] = 0;

                setTotalPage((prevTotal) => prevTotal - prevPages[key] + 0);
                return newPages;
            });
        } else {
            const reader = new FileReader();
            reader.readAsBinaryString(input.files[0]);
            reader.onloadend = function () {
                const count = reader.result.match(
                    /\/Type[\s]*\/Page[^s]/g
                ).length;

                setPages((prevPages) => {
                    let newPages = [...prevPages];
                    newPages[key] = count;

                    setTotalPage(
                        (prevTotal) => prevTotal - prevPages[key] + count
                    );
                    return newPages;
                });
            };
        }
    };

    return (
        <div className='flex justify-center items-center mt-20'>
            <div className='flex justify-center flex-col items-start shadow-lg rounded-lg w-[350px] h-[100%] pb-20 p-10'>
                {/* title */}

                <div className='pr-4 pl-2'>
                    <p className='my-2 text-lg text-primary font-medium text-left'>
                        Xerox <span className='text-secondary'></span>
                    </p>
                    <p className='my-2 text-lg text-primary font-medium text-left'>
                        {" "}
                        Rate : ₹{" "}
                        <span className='text-secondary text-base'>
                            {0.85} per page
                        </span>
                    </p>
                </div>

                {/* Inputes */}

                <div className='pl-2 w-[270px] overflow-hidden text-ellipsis'>
                    <label className='text-gray-700 text-sm pt-6'>
                        Upload your files here
                    </label>

                    <div>{fileInput}</div>

                    <button onClick={handleplusbutton}>ADD MORE FILES</button>

                    <p className='my-2 text-lg text-primary font-medium text-left'>
                        Total Pages: <span id='result'>{totalpage}</span>{" "}
                    </p>
                    <p className='my-2 text-lg text-primary font-medium text-left'>
                        Total:{" "}
                        <span id='result'>{Math.ceil(totalpage * 0.85)}</span>{" "}
                    </p>

                    <p
                        className='bg-primary py-2  px-6 text-white rounded-md mt-4 mx-auto text-center hover:cursor-pointer'
                        onClick={() => {
                            const price = Math.ceil(0.85 * totalpage);
                            // console.log(typeof price);
                            const pa = Math.trunc(price);
                            !isNaN(pa) && pa > 0 && checkoutHandler(pa);
                        }}>
                        Order
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Xerox;
