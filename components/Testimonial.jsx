import React from 'react';
import team from '../assets/profile.jpg'
import {ImQuotesLeft} from 'react-icons/im'


const Testimonial = () => {
  
  return (
    <div>
       <div className='relative z-10 bg-white py-24 box-border'>
            <div className='container w-[100%] mx-auto'>
                <div className='text-left mb-16'>
                    <div className='mb-16 text-center justify-center flex flex-col'>
                        <h1 className='text-[48px] font-bold leading-[62px] text-[#000850]'>
                            Our Students Says
                        </h1>
                        <p className='text-[16px] leading-8 mb-4 text-[#66A7FF]'>
                            Discover Your Perfect Program In Our Courses
                        </p>
                    </div>
                </div>
                <div className='overflow-x-auto w-[100%] flex flex-row justify-center'>
                    <div className='w-1/3 p-10'>
                        <div className='mb-5'>
                            <ImQuotesLeft style={{color: '#66A7FF', height: '30px', width: '30px'}}/>
                            <p className='text-[16px] text-[#5081c7]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>
                        <img src={team} className='float-left mr-8 mb-10 w-[60px] h-[60px] rounded-full flex justify-center' alt="/" />
                        <div className='flex flex-col mt-5'>
                            <h5 className='font-bold text-[18px] text-[#000850]'>Jackei Sanders</h5>
                            <p className='text-[#5081c7]'>Marketing Manager</p>
                        </div>
                    </div>
                    
                    <div className='w-1/3 p-10'>
                        <div className='mb-5'>
                            <ImQuotesLeft style={{color: '#66A7FF', height: '30px', width: '30px'}}/>
                            <p className='text-[16px] text-[#5081c7]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>
                        <img src={team} className='float-left mr-8 mb-10 w-[60px] h-[60px] rounded-full flex justify-center' alt="/" />
                        <div className='flex flex-col mt-5'>
                            <h5 className='font-bold text-[18px] text-[#000850]'>Jackei Sanders</h5>
                            <p className='text-[#5081c7]'>Marketing Manager</p>
                        </div>
                    </div>

                    <div className='w-1/3 p-10'>
                        <div className='mb-5'>
                            <ImQuotesLeft style={{color: '#66A7FF', height: '30px', width: '30px'}}/>
                            <p className='text-[16px] text-[#5081c7]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                        </div>
                        <img src={team} className='float-left mr-8 mb-10 w-[60px] h-[60px] rounded-full flex justify-center' alt="/" />
                        <div className='flex flex-col mt-5'>
                            <h5 className='font-bold text-[18px] text-[#000850]'>Jackei Sanders</h5>
                            <p className='text-[#5081c7]'>Marketing Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Testimonial;
