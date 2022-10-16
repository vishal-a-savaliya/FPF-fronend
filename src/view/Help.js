import React from 'react'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import {
    EnvelopeIcon,
    PhoneIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'


const svg_variants = {
    initial: {
        x: 0,
    },

    animate: {
        x: 15,

        transition: {
            duration: 1,
            yoyo: Infinity,

        }
    }

}

const contact_variants = {

    initial: {
        opacity: 0,
        x: '100vw'
    },

    animate: {
        opacity: 1,
        x: 0,
        transition: {
            ease: 'easeInOut',
            delay: 0.5,
            duration: 1
        }
    },

    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut',
            duration: 1
        }
    }
}



function Contact() {


    const form = useRef();

    const [submmit, setSubmmit] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7lwrcve', 'template_jn11elp', form.current, 'NJAMm2VeG3baNR6-j')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setSubmmit(!submmit)
    };


    return (
        <motion.div variants={contact_variants} initial='initial' animate='animate' exit='exit' className='mb-40 md:mb-44'>

            {/* contact info */}

            <div className='mb-20 items-center flex-col md:my-20 mt-20 md:mb-5'>

                {/* <Heading title={"GET IN TOUCH"} /> */}
                <h1 className='text-xl text-center font-medium'>Help & Support</h1>
                <p className='mx-auto mt-2 border-b-2 border-collapse border-primary w-10 mb-10'></p>

                <ul className='flex justify-center flex-col items-center mt-10'>

                    <p className='text-xl sm:text-2xl font-md m-2'>
                        Ahmedabad, Gujarat, India
                    </p>

                    <div className='flex-col flex justify-center items-center mt-2 sm:flex-row'>

                        <a href='callto:9510342875' className='p-2'>
                            <li className='flex'> <PhoneIcon className="h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" /> +91 9510342875</li>
                        </a>
                        <a href='mailto:contact@zelixtech.com' className='p-2'>
                            <li className='flex'> <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" /> <span className='pl-1'>contact@zelixtech.com</span></li>
                        </a>
                    </div>


                </ul>

            </div>

            {/* end of contact info */}



            {/* map & contact form */}

            <div className='md:mx-10 md:my-20 '>

                <div className="overflow-hidden flex items-end justify-start relative md:rounded-md">

                    {/* contact form div */}

                    {submmit ? (

                        <div className="bg-primary relative flex flex-wrap justify-center p-5 w-[95%] h-[600px] shadow-lg md:shadow-md  my-[10%] mx-auto rounded-lg sm:h-[700px] sm:w-[70%] md:w-[690px] md:my-[15%] ">

                            <XMarkIcon className="absolute h-6 w-6 flex-shrink-0 text-white right-2 m-3 hover:cursor-pointer" onClick={() => { setSubmmit(!submmit) }} aria-hidden="true" />

                            <div className='flex flex-col justify-center w-[400px]'>
                                <h1 className='text-7xl text-white text-left font-extralight '>Thank</h1>
                                <h1 className='text-8xl text-white text-left font-bold'>You .</h1>
                                <h1 className='text-green-400 text-3xl px-1 py-5 pl-2 font-semibold'>for being so nice.</h1>
                                <h1 className='text-white text-2xl px-1 py-10 pl-2 font-semibold'>We'll be in touch shortly!</h1>
                            </div>

                        </div>)


                        : (

                            <div className="bg-white relative flex flex-wrap w-[95%]  shadow-lg md:shadow-md  my-[10%] mx-auto rounded-lg sm:w-[70%] md:w-[690px] md:my-[2%]">

                                {/* image & info  */}
                                <div className='relative contact-img bg-cover md:bg-center w-full rounded-t-md'>

                                    <div className='text-center mx-auto my-16 text-white'>
                                        <h2 className='font-medium text-3xl '>Contact Us</h2>
                                        <p className='mx-auto mt-1 border-b-2 border-collapse border-green-400 w-10'></p>
                                        <p className='text-md py-4  '>Feel free to drop us a line below!</p>
                                    </div>

                                </div>

                                {/* contact form  */}
                                <div className='flex justify-between flex-col w-full flex-wrap mx-6 md:mx-20 my-14'>

                                    {/* form section */}
                                    <form ref={form} onSubmit={sendEmail}>


                                        <div className="w-full flex md:items-baseline mb-6 flex-col md:flex-row">

                                            <label htmlFor="name" className="label">Full Name:</label>
                                            <input type="text" id="name" name="name" placeholder='Enter full name' autocomplete="off" className="input" required />

                                        </div>

                                        <div className="w-full flex md:items-baseline mb-6 flex-col md:flex-row">

                                            <label htmlFor="email" className="label">Email:</label>
                                            <input type="email" id="email" name="email" placeholder='Enter email Address' autocomplete="off" className="input" required />

                                        </div>

                                        <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">

                                            <label htmlFor="phone" className="label">Phone:</label>
                                            <input type="text" id="phone" name="phone" placeholder='Enter phone number' autocomplete="off" className="input" required />

                                        </div>

                                        <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">

                                            <label htmlFor="message" className="label">Message:</label>
                                            <textarea id="message" name="message" placeholder='Your Comments...' autocomplete="off" className="input" defaultValue={""} required />

                                        </div>

                                        <div className="w-full flex mb-6 md:items-baseline flex-col md:flex-row">

                                            <label className="lable"></label>

                                            {/* send button */}

                                            <button type="submmit" className="text-white bg-primary flex items-center shadow-gray-400/50 shadow-lg justify-around border-0 py-2 px-6  mt-4 w-[150px] rounded-full focus:outline-none hover:bg-[#010200]  text-lg font-normal " >

                                                Send

                                                {/* Arrow icon svg */}
                                                <motion.svg variants={svg_variants} initial='initial' animate='animate'

                                                    className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </motion.svg>

                                            </button>

                                        </div>

                                    </form>


                                </div> {/* end of contact from */}


                            </div>
                        )}



                </div>

            </div>  {/* end of map & contact frorm */}


            {/* main div */}
        </motion.div>
    )
}

export default Contact