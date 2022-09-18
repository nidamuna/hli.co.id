import React from 'react';
import {GiGraduateCap} from 'react-icons/gi'
import {FiLifeBuoy} from 'react-icons/fi'
import {BiVideo} from 'react-icons/bi'
import { BsLayers } from 'react-icons/bs';

const Features = () => {
  
  return (
    <div>
      <div className='relative z-10 bg-white py-24 box-border'>
            <div className='container w-[100%] mx-auto'>
                <div className='text-left mb-16'>
                    <div className='mb-16 text-center justify-center flex flex-col'>
                        <h1 className='text-[48px] font-bold leading-[62px] text-[#000850]'>
                            Transform Your Life
                        </h1>
                        <p className='text-[16px] leading-8 mb-4 text-[#66A7FF]'>
                            Discover Your Perfect Program In Our Courses.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-4 justify-center gap-6'>
                    <div className='w-auto p-10 text-center'>
                        <div className='mb-5 h-[50px] flex justify-center'>
                            <GiGraduateCap style={{color: '#000850', height: '50px', width: '50px'}}/>
                        </div>
                        <div className='overflow-hidden text-center'>
                            <h4 className='mb-2 text-[22px] font-semibold text-[#000850] '>
                                Expert Teacher
                            </h4>
                            <p className='text-[16px] text-[#5081c7]'>
                            Develop skills for career of various majors including computer
                            </p>
                        </div>
                    </div>
                    <div className='w-auto p-10 text-center'>
                        <div className='mb-5 h-[50px] flex justify-center'>
                            <BsLayers style={{color: '#000850', height: '50px', width: '50px'}}/>
                        </div>                        <div className='overflow-hidden text-center'>
                            <h4 className='mb-2 text-[22px] font-semibold text-[#000850]'>
                            Self Development
                            </h4>
                            <p className='text-[16px] text-[#5081c7]'>
                            Develop skills for career of various majors including computer.                            </p>
                        </div>
                    </div>
                    <div className='w-auto p-10 text-center'>
                        <div className='mb-5 h-[50px] flex justify-center'>
                            <BiVideo style={{color: '#000850', height: '50px', width: '50px'}}/>
                        </div>                        <div className='overflow-hidden text-center'>
                            <h4 className='mb-2 text-[22px] font-semibold text-[#000850]'>
                            Remote Learning                            </h4>
                            <p className='text-[16px] text-[#5081c7]'>
                            Develop skills for career of various majors including language                            </p>
                        </div>
                    </div>
                    <div className='w-auto p-10 text-center'>
                        <div className='mb-5 h-[50px] flex justify-center'>
                            <FiLifeBuoy style={{color: '#000850', height: '50px', width: '50px'}}/>
                        </div>                        <div className='overflow-hidden text-center'>
                            <h4 className='mb-2 text-[22px] font-semibold text-[#000850]'>
                            Life Time Support
                            </h4>
                            <p className='text-[16px] text-[#5081c7]'>
                            Develop skills for career of various majors including computer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Features;
