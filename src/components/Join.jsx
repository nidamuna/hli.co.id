import React from 'react';
import join from '../assets/join.png'

const Join = () => {
  
  return (
    <div>
    <div className='z-30 box-border'>
        <div className='container mx-auto px-3 '>
            <div className='justify-center flex flex-wrap'>
                <div className='rounded-xl p-10 z-40 shadow-xl shadow-[#000850] bg-white grid lg:grid-cols-2 md:grids-cols-1 justify-center items-center relative mt-6 mb-6 w-auto'>
                    <div className='lg:mb-0 md:mb-5'>
                        <img src={join} className='w-full h-auto' alt="/" />
                    </div>
                    <div className='lg:mb-0 md:mb-5 flex flex-row justify-start'>
                    <div className='ml-10'>
                        <h2 className='text-[20px] font-semibold text-[#66A7FF]'>
                            Not sure where to start?
                        </h2>
                        <h1 className='mt-5 font-bold text-[30px] text-[#000850]'>
                            Want to know Special Offers & Updates of new courses?
                        </h1>
                        <button className='h-auto w-auto p-3 mt-5 rounded-md bg-red-500 hover:scale-110 font-semibold text-[18px] text-white'>
                            Join Now
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</div>
  );
}

export default Join;
