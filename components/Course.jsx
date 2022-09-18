import React from 'react';
import card1 from '../assets/card1.jpg'
import {BsFillStarFill, BsClock, BsPerson, BsPlayCircle, BsFillFileEarmarkFill} from 'react-icons/bs'

const Course = () => {
  
  return (
    <div>
        <div className='px-0 py-[100px] box-border'>
            <div className='container w-[100%] mx-auto'>
                <div className='text-left'>
                    <div className='mb-16 text-center justify-center flex flex-col text-[#000850]'>
                        <h1 className='text-[48px] font-bold leading-[62px]'>Popular Courses</h1>
                        <p className='text-[16px] leading-8 mb-4 text-[#66A7FF]'>Discover Your Perfect Program In Our Courses.</p>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-col-2 justify-center gap-5'>
                    {/* card 1 */}
                    <div className='relative overflow-hidden rounded-lg mb-8 shadow-2xl z-0'>
                        <div className='relative '>
                            <img 
                            className='w-[100%] h-auto align-middle' 
                            src={card1} alt='/' />
                            <div className='absolute bottom-0 left-0 bg-[#F14D5D] py-3 px-4 text-white text-[20px] font-bold'>
                                $300
                            </div>
                        </div>
                        <div className='p-5 relative '>
                            <div className='mb-3 flex flex-row'>
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <span className='ml-2 text-[13px] mb-2 text-slate-700'>
                                    3.9 (30 reviews)
                                </span>
                            </div>
                            <h3 className='text-[20px] leading-8 mb-5 text-[#000850] text-left'>
                                Data Competitive Strategy law & Organization 
                            </h3>
                            <div className='mt-5 items-center justify-between flex flex-row '>
                                <span className='flex flex-row items-center justify-center text-[14px] text-[#77838F] text-left leading-8'>
                                    <BsClock style={{color: '#77838F'}}/> 
                                    <p className='ml-2 '>6.5 hr</p>
                                </span>
                                <span className='flex flex-row items-center justify-center text-[14px] text-[#77838F] text-left leading-8'>
                                    <BsPerson style={{color: '#77838F'}}/> 
                                    <p className='ml-2'>51 Student</p>
                                </span>
                                <span className='flex flex-row items-center justify-center text-[14px] text-[#77838F] text-left leading-8'>
                                    <BsPlayCircle style={{color: '#77838F'}}/> 
                                    <p className='ml-2'>26 Lesson</p>
                                </span>
                            </div>
                        </div>
                        <div className='z-50 scale-100 shadow-lg bg-white absolute top-0 left-0 w-[101%] h-[101%] py-8 px-6 hover:opacity-100 opacity-0'>
                            <h1 className='font-bold text-[30px]'>$300</h1>
                            <h3 className='text-[20px] leading-8 mt-8 mb-5 text-[#000850]'>
                                Data Competitive Strategy law & Organization
                            </h3>
                            <div className='flex flex-row mb-5 text-center justify-between'>
                                <div className='mr-6 flex flex-row justify-center'>
                                    <img className='w-6 h-6 rounded-full mr-2 align-middle' src={card1} alt='/' />
                                    <span className='text-[16px] text-[#66A7FF]'>Joseph</span>
                                </div>
                                <span className='text-[14px] flex flex-row justify-center items-center'>
                                    <BsFillFileEarmarkFill style={{color: '#66A7FF'}}/>
                                    <p className='ml-2 text-[#66A7FF]'>Lesson</p>
                                </span>
                            </div>
                            <p className='text-[#77838F] mb-5 text-[16px]'>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam libero magni reiciendis quam ipsa blanditiis, facilis velit eaque illo?
                            </p>
                            <button className='rounded-lg text-white bg-[#66A7FF] text-[16px] py-2 px-5'>Join Now</button>
                        </div>
                    </div>
                        
                    {/* card 2 */}
                    <div className='relative overflow-hidden rounded-lg mb-8 shadow-2xl z-0'>
                        <div className='relative '>
                            <img 
                            className='w-[100%] h-auto align-middle' 
                            src={card1} alt='/' />
                            <div className='absolute bottom-0 left-0 bg-[#F14D5D] py-3 px-4 text-white text-[20px] font-bold'>
                                $300
                            </div>
                        </div>
                        <div className='p-5 relative '>
                            <div className='mb-3 flex flex-row'>
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <span className='ml-2 text-[13px] mb-2 text-slate-700'>
                                    3.9 (30 reviews)
                                </span>
                            </div>
                            <h3 className='text-[20px] leading-8 mb-5 text-[#000850] text-left'>
                                Data Competitive Strategy law & Organization 
                            </h3>
                            <div className='mt-5 items-center justify-between flex flex-row '>
                                <span className='flex flex-row items-center justify-center text-[14px] text-[#77838F] text-left leading-8'>
                                    <BsClock style={{color: '#77838F'}}/> 
                                    <p className='ml-2'>6.5 hr</p>
                                </span>
                                <span className='flex flex-row items-center justify-center text-[14px] text-[#77838F] text-left leading-8'>
                                    <BsPerson style={{color: '#77838F'}}/> 
                                    <p className='ml-2'>51 Student</p>
                                </span>
                                <span className='flex flex-row items-center justify-center text-[14px] text-[#77838F] text-left leading-8'>
                                    <BsPlayCircle style={{color: '#77838F'}}/> 
                                    <p className='ml-2'>26 Lesson</p>
                                </span>
                            </div>
                        </div>
                        <div className='z-50 scale-100 shadow-lg bg-white absolute top-0 left-0 w-[101%] h-[101%] py-8 px-6 hover:opacity-100 opacity-0'>
                            <h1 className='font-bold text-[30px]'>$300</h1>
                            <h3 className='text-[20px] leading-8 mt-8 mb-5 text-[#000850]'>
                                Data Competitive Strategy law & Organization
                            </h3>
                            <div className='flex flex-row mb-5 text-center justify-between'>
                                <div className='mr-6 flex flex-row justify-center'>
                                    <img className='w-6 h-6 rounded-full mr-2 align-middle' src={card1} alt='/' />
                                    <span className='text-[16px] text-[#66A7FF]'>Joseph</span>
                                </div>
                                <span className='text-[14px] flex flex-row justify-center items-center'>
                                    <BsFillFileEarmarkFill style={{color: '#66A7FF'}}/>
                                    <p className='ml-2 text-[#66A7FF]'>Lesson</p>
                                </span>
                            </div>
                            <p className='text-[#77838F] mb-5 text-[16px]'>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam libero magni reiciendis quam ipsa blanditiis, facilis velit eaque illo?
                            </p>
                            <button className='rounded-lg text-white bg-[#66A7FF] text-[16px] py-2 px-5'>Join Now</button>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className='relative overflow-hidden rounded-lg mb-8 shadow-2xl z-0'>
                        <div className='relative '>
                            <img 
                            className='w-[100%] h-auto align-middle' 
                            src={card1} alt='/' />
                            <div className='absolute bottom-0 left-0 bg-[#F14D5D] py-3 px-4 text-white text-[20px] font-bold'>
                                $300
                            </div>
                        </div>
                        <div className='p-5 relative '>
                            <div className='mb-3 flex flex-row'>
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <BsFillStarFill style={{ color: 'yellow' }} />
                                <span className='ml-2 text-[13px] mb-2 text-slate-700'>
                                    3.9 (30 reviews)
                                </span>
                            </div>
                            <h3 className='text-[20px] leading-8 mb-5 text-[#000850] text-left'>
                                Data Competitive Strategy law & Organization 
                            </h3>
                            <div className='mt-5 items-center justify-between flex flex-row '>
                                <span className='flex flex-row items-center justify-center text-[14px] text-[#77838F] text-left leading-8'>
                                    <BsClock style={{color: '#77838F'}}/> 
                                    <p className='ml-2'>6.5 hr</p>
                                </span>
                                <span className='flex flex-row items-center justify-center text-[14px] text-[#77838F] text-left leading-8'>
                                    <BsPerson style={{color: '#77838F'}}/> 
                                    <p className='ml-2'>51 Student</p>
                                </span>
                                <span className='flex flex-row items-center justify-center text-[14px] text-[#77838F] text-left leading-8'>
                                    <BsPlayCircle style={{color: '#77838F'}}/> 
                                    <p className='ml-2'>26 Lesson</p>
                                </span>
                            </div>
                        </div>
                        <div className='z-50 scale-100 shadow-lg bg-white absolute top-0 left-0 w-[101%] h-[101%] py-8 px-6 hover:opacity-100 opacity-0'>
                            <h1 className='font-bold text-[30px]'>$300</h1>
                            <h3 className='text-[20px] leading-8 mt-8 mb-5 text-[#000850]'>
                                Data Competitive Strategy law & Organization
                            </h3>
                            <div className='flex flex-row mb-5 text-center justify-between'>
                                <div className='mr-6 flex flex-row justify-center'>
                                    <img className='w-6 h-6 rounded-full mr-2 align-middle' src={card1} alt='/' />
                                    <span className='text-[16px] text-[#66A7FF]'>Joseph</span>
                                </div>
                                <span className='text-[14px] flex flex-row justify-center items-center'>
                                    <BsFillFileEarmarkFill style={{color: '#66A7FF'}}/>
                                    <p className='ml-2 text-[#66A7FF]'>Lesson</p>
                                </span>
                            </div>
                            <p className='text-[#77838F] mb-5 text-[16px]'>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam libero magni reiciendis quam ipsa blanditiis, facilis velit eaque illo?
                            </p>
                            <button className='rounded-lg text-white bg-[#66A7FF] text-[16px] py-2 px-5'>Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Course;
