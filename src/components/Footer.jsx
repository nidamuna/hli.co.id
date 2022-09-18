import React from 'react';
import { BsFacebook, BsTwitter, BsLinkedin,  BsPinterest } from "react-icons/bs";
import logo from '../assets/Logo-HLI.png'


const Header = () => {
  
  return (
    <div>
        <div className='z-0 bg-[#66A7FF] pb-[20px] pt-[250px] box-border -mt-[180px] cursor-pointer'>
            <div className='w-full container mx-auto pb-[80px] justify-center'>
                <div className='items-center justify-center flex lg:flex-row md:flex-col py-10 text-white w-[100%]'>
                    <div className='flex flex-col justify-start basis-2/5'>
                        <div className='flex flex-row font-bold text-[25px] justify-start items-center'>
                            <img src={logo} className='h-[25px] w-auto' alt='/logo' />
                            <h1> Home Learning Indonesia </h1>
                        </div>
                        <span className='mt-8 text-[18px]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </span>
                        <div className='mt-10 text-[16px] gap-2 text-slate-800 flex flex-row justify-start items-center'>
                            <p>Connect :</p>
                            <BsFacebook />
                            <BsTwitter />
                            <BsLinkedin />
                            <BsPinterest />
                        </div>
                    </div>
                    <div className='ml-24 basis-3/5 grid grid-cols-4 text-[#000850] justify-start overflow-hidden'>
                        <div>
                            <h1 className='mb-4 font-semibold text-[20px]'>Explore</h1>
                            <ul className='text-[18px]'>
                                <li className='mb-3'>About Us</li>
                                <li className='mb-3'>Contact Us</li>
                                <li className='mb-3'>Services</li>
                                <li className='mb-3'>Support</li>
                            </ul>
                        </div>
                        <div >
                            <h1 className='mb-4 font-semibold text-[20px]'>Programs</h1>
                            <ul className='text-[18px]'>
                                <li className='mb-3'>SEO Businesss</li>
                                <li className='mb-3'>Digital Marketing</li>
                                <li className='mb-3'>Garphich Design</li>
                                <li className='mb-3'>Social Marketing</li>
                            </ul>
                        </div>
                        <div className='ml-8'>
                            <h1 className='mb-4 font-semibold text-[20px]'>Links</h1>
                            <ul className='text-[18px]'>
                                <li className='mb-3'>News & Blog</li>
                                <li className='mb-3'>Privacy Policy</li>
                                <li className='mb-3'>Support</li>
                                <li className='mb-3'>Return Policy</li>
                            </ul>
                        </div>
                        <div className='ml-8'>
                            <h1 className='mb-4 font-semibold text-[20px]'>Addres</h1>
                            <ul className='text-[18px]'>
                                <li className='mb-3'>+0800 327 8534</li>
                                <li className='mb-3'>support@hli.com</li>
                                <li className='mb-3'>Magelang, Jawa Tengah, Indonesia</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='py-5 bottom-0 bg-[#000850]  h-auto flex items-center'>
                <div className='container w-[100%] mx-auto'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row justify-start items-center'>
                            <p className='text-[18px] text-gray-400'>© 2021 Edumel All rights reserved by </p>
                            <span className='font-semibold text-[18px] text-white'>
                                hliTeam
                            </span>
                        </div>
                        <div className='flex flex-row justify-end'>
                            <button className='font-semibold text-white text-[18px] p-3 border-l-2 border-white items-center ml-3'>
                                Terms of Service
                            </button>
                            <button className='font-semibold text-white text-[18px] p-3 border-l-2 border-white items-center ml-3'>
                                Join Us
                            </button>
                            <button className='font-semibold text-white text-[18px] p-3 border-l-2 border-white items-center ml-3'>
                                Privacy Policy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  );
}

export default Header;
