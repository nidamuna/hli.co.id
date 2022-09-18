import React from 'react';
import team from '../assets/profile.jpg'


const Team = () => {
  
  return (
    <div>
      <div className='relative z-10 bg-white py-24 box-border'>
            <div className='container w-[100%] mx-auto'>
                <div className='text-left'>
                    <div className='mb-16 text-left justify-start flex flex-col'>
                        <h1 className='text-[48px] font-bold leading-[62px] text-[#000850]'>
                        Top Rated Instructors</h1>
                        <p className='text-[16px] leading-8 mb-4 text-[#66A7FF]'>
                        Discover Your Perfect Program In Our Courses.                        </p>
                        <button className='rounded-lg w-[100px] font-semibold border-[#66A7FF] text-[#66A7FF] bg-white p-3 border-2 hover:scale-110'>
                            All team 
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-4 justify-center gap-6'>
                    <div className='w-auto p-10 text-center hover:scale-110 hover:bg-blue-100 rounded-xl shadow-xl'>
                        <img src={team} className='mb-5 w-full h-auto bg-cover rounded-full flex justify-center' alt='/' />
                        <div className='overflow-hidden text-center'>
                            <h4 className='mb-2 text-[22px] font-semibold '>
                                Haris Ham
                            </h4>
                            <p className='text-[16px] text-[#5081c7]'>
                                SEO Expert
                            </p>
                        </div>
                    </div>
                    
                    <div className='w-auto p-10 text-center hover:scale-110 hover:bg-blue-100 rounded-xl shadow-xl'>
                        <img src={team} className='mb-5 w-full h-auto bg-cover rounded-full flex justify-center' alt="/" />
                        <div className='overflow-hidden text-center'>
                            <h4 className='mb-2 text-[22px] font-semibold '>
                                Haris Ham
                            </h4>
                            <p className='text-[16px] text-[#5081c7]'>
                                SEO Expert
                            </p>
                        </div>
                    </div>
                    
                    <div className='w-auto p-10 text-center hover:scale-110 hover:bg-blue-100 rounded-xl shadow-xl'>
                        <img src={team} className='mb-5 w-full h-auto bg-cover rounded-full flex justify-center' alt='/' />
                        <div className='overflow-hidden text-center'>
                            <h4 className='mb-2 text-[22px] font-semibold '>
                                Haris Ham
                            </h4>
                            <p className='text-[16px] text-[#5081c7]'>
                                SEO Expert
                            </p>
                        </div>
                    </div>

                    <div className='w-auto p-10 text-center hover:scale-110 hover:bg-blue-100 rounded-xl shadow-xl'>
                        <img src={team} className='mb-5 w-full h-auto bg-cover rounded-full flex justify-center' alt='/' />
                        <div className='overflow-hidden text-center'>
                            <h4 className='mb-2 text-[22px] font-semibold '>
                                Haris Ham
                            </h4>
                            <p className='text-[16px] text-[#5081c7]'>
                                SEO Expert
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default Team;
