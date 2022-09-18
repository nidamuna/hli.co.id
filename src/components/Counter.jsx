import React from 'react';

const Counter = () => {
  
  return (
<div>
    <div className='-mt-[100px] relative z-30 box-border'>
        <div className='container mx-auto px-3'>
            <div className='justify-center'>
                <div className='rounded-xl py-10 px-5 z-40 bg-[#2eb67d] gap-6 grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-center items-center relative mt-6 mb-6 w-auto'>
                            <div className='text-center lg:mb-0 md:mb-5'>
                                <div className='text-center'>
                                    <span className='text-[50px] text-white font-bold leading-5'>
                                        2000+
                                    </span>
                                </div>
                                <p className='text-white text-[16px] mt-4 leading-7'>Student</p>
                            </div>
                            <div className='text-center lg:mb-0 md:mb-5'>
                                <div className='text-center'>
                                    <span className='text-[50px] text-white font-bold leading-5 '>
                                        1200
                                    </span>
                                </div>
                                <p className='text-white text-[16px] mt-4 leading-7 '>Online Course</p>
                            </div>
                            <div className='text-center mb-0'>
                                <div className='text-center'>
                                    <span className='text-[50px] text-white font-bold leading-5'>
                                        2256
                                    </span>
                                </div>
                                <p className='text-white text-[16px] mt-4 leading-7'>Finished Seasons</p>
                            </div>
                            <div className='text-center mb-0'>
                                <div className='text-center'>
                                    <span className='text-[50px] text-white font-bold leading-5'>
                                        100%
                                    </span>
                                </div>
                                <p className='text-white text-[16px] mt-4 leading-7'>Satisfication</p>
                            </div>
                    </div>
            </div>
        </div>
    </div>   
</div>
  );
}

export default Counter;
