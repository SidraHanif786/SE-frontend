import React from "react";
import { Call } from 'react-ionicons'
import { MailOpen } from 'react-ionicons'
import { Location } from 'react-ionicons'

const Contact = () => {
    return (
        <div className="">
            <div className="pt-[120px] pb-[20px] flex w-full min-h-screen justify-center items-center bg-stone-100" >
                <div className="flex flex-col space-y-6  bg-teal-700 w-full max-w-5xl p-8 pt-20 rounded-none shadow-lg md:rounded-xl md:flex-row md:space-x-6 md:space-y-0 sm:p-12">
                    <div className="flex flex-col space-y-8 justify-between">
                        
                        <div className="flex flex-col">
                            <h1 className="font-semibold text-lg md:font-bold md:text-4xl tracking-wide">Contact Us</h1>
                            <p className="pt-4 text-white text-md text-justify"> Welcome to our contact page! We value your feedback and inquiries. </p>
                            <p className="pt-4 text-white text-md text-justify"> Feel free to use the contact form below to send us a message. </p>
                            <p className="pt-4 text-white text-md text-justify"> Thank you for choosing us, and we look forward to assisting you!</p>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <div className="inline-flex space-x-2 items-center">
                                <Call name="call" color={'#00000'} title='Call' height="25px" width="25px" />
                                <span className='text-sm md:text-xl'>+(123) 456 7890</span>
                            </div>
                            <div className="inline-flex space-x-2 items-center">
                                <MailOpen color={'#00000'} title='Email' height="25px" width="25px" />
                                <span className='text-sm md:text-xl'>contact@furniturehaven.com</span>
                            </div>
                            <div className="inline-flex space-x-2 items-center">
                                <Location color={'#00000'} title="Location" height="25px" width="25px" />
                                <span className='text-sm md:text-xl'>123 abc Road Lahore Pakistan</span>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col bg-white  rounded-xl shadow-lg text-gray-600 p-8 md:w-110 ">
                            <form action="#" method="POST" className="flex flex-col space-y-4">
                                <div>
                                    <label for="" className="text-sm">Your Name</label>
                                    <input type="text" placeholder="Your Name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"></input>
                                </div>
                                
                                <div>
                                    <label for="" className="text-sm">Email Address</label>
                                    <input type="email" placeholder="Email" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"></input>
                                </div>
                                <div>
                                    <label for="" className="text-sm">Message</label>
                                    <textarea placeholder="Message" rows={5} className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none"></textarea>
                                </div>
                                <button onClick="" className="inline-block align-middle self-end bg-teal-700 hover:bg-teal-900 text-center font-normal text-white rounded-lg px-6 py-2 uppercase text-sm">Send Message</button>

                            </form>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
export default Contact