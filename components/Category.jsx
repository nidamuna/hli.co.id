import React from 'react';
import {BsCodeSquare} from 'react-icons/bs'
import {TbDna2, TbMathSymbols} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {RiPencilRulerLine} from 'react-icons/ri'

const Category = () => {
  
  return (
    <div>
        <div className='relative z-10 bg-white py-24 box-border'>
            <div className='container w-[100%] mx-auto'>
                <div className='text-left mb-16'>
                    <div className='mb-16 text-center justify-center flex flex-col'>
                        <h1 className='text-[48px] font-bold leading-[62px] text-[#000850]'>
                            Categories you want to learn
                        </h1>
                        <p className='text-[16px] leading-8 mb-4 text-[#66A7FF]'>
                            Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                        </p>
                    </div>
                </div>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 md:gap-y-36 gap-4'>
                    <div className='w-auto h-36 max-h-36 min-h-36'>
                        <div className='scale-100 pt-10 pb-8 px-5 text-white text-center relative rounded-2xl bg-[#DD246E] hover:bg-white hover:text-black flex flex-col items-center justify-center'>
                            <div className='w-28 h-28 rounded-full bg-white mb-5 border-[#66A7FF] border-2'>
                                <BsCodeSquare style={{color: '#000850', height: 'auto', width: '45px', display: 'inline-block', marginTop: '30%'}}/>
                            </div>
                            <h1 className='text-[20px] font-bold leading-5 mt-auto'>
                                Data Science & Analytics
                            </h1>
                        </div>
                    </div>
                    {/* card2 */}
                    <div className='w-auto h-36 max-h-36 min-h-36'>
                        <div className='scale-100 pt-10 pb-8 px-5 text-white text-center relative rounded-2xl bg-[#2eb67d] hover:bg-white hover:text-black flex flex-col items-center justify-center'>
                            <div className='w-28 h-28 rounded-full bg-white mb-5 border-[#66A7FF] border-2'>
                                <TbMathSymbols style={{color: '#000850', height: 'auto', width: '45px', display: 'inline-block', marginTop: '30%'}}/>
                            </div>
                            <h1 className='text-[20px] font-bold leading-5 mt-auto'>
                            Algebra Math calculation
                            </h1>
                        </div>
                    </div>
                    {/* card3 */}
                    <div className='w-auto h-36 max-h-36 min-h-36'>
                        <div className='scale-100 pt-10 pb-8 px-5 text-white text-center relative rounded-2xl bg-[#2d75e0] hover:bg-white hover:text-black flex flex-col items-center justify-center'>
                            <div className='w-28 h-28 rounded-full bg-white mb-5 border-[#66A7FF] border-2'>
                                <RiPencilRulerLine style={{color: '#000850', height: 'auto', width: '45px', display: 'inline-block', marginTop: '30%'}}/>
                            </div>
                            <h1 className='text-[20px] font-bold leading-5 mt-auto'>
                            Web Development
                            </h1>
                        </div>
                    </div>
                    {/* card4 */}
                    <div className='w-auto h-36 max-h-36 min-h-36'>
                        <div className='scale-100 pt-10 pb-8 px-5 text-white text-center relative rounded-2xl bg-[#8560ca] hover:bg-white hover:text-black flex flex-col items-center justify-center'>
                            <div className='w-28 h-28 rounded-full bg-white mb-5 border-[#66A7FF] border-2'>
                                <TbDna2 style={{color: '#000850', height: 'auto', width: '45px', display: 'inline-block', marginTop: '30%'}}/>
                            </div>
                            <h1 className='text-[20px] font-bold leading-5 mt-auto'>
                            Artificial Intellegence
                            </h1>
                        </div>
                    </div>
                    {/* card5 */}
                    <div className='w-auto h-36 max-h-36 min-h-36'>
                        <div className='scale-100 pt-10 pb-8 px-5 text-white text-center relative rounded-2xl bg-[#E2B93B] hover:bg-white hover:text-black flex flex-col items-center justify-center'>
                            <div className='w-28 h-28 rounded-full bg-white mb-5 border-[#66A7FF] border-2'>
                                <FaReact style={{color: '#000850', height: 'auto', width: '45px', display: 'inline-block', marginTop: '30%'}}/>
                            </div>
                            <h1 className='text-[20px] font-bold leading-5 mt-auto'>
                            Digital Marketing & SEO
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Category;
