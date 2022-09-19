import React, { useState } from 'react';
import {
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFillGrid3X3GapFill,
  BsSearch,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsPinterest,
  BsFillPersonFill,
} from 'react-icons/bs';
import logo from '../assets/Logo-HLI.png';
import banner from '../assets/banners.png';

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div className="py-3 px-0 bg-[#000850] cursor-pointer flex justify-center items-center box-border text-[16px] leading-7 text-left text-white font-semibold">
        <div className="container w-[100%]">
          <div className="flex-wrap justify-between flex box-border">
            <div className="xl:col-span-8 lg:col-span-6 md:col-span-12">
              <div className="md:justify-center md:flex justify-start">
                <ul className="pl-0 list-none flex-row flex md:text-center text-left">
                  <li className="mr-6 text-[15px] flex flex-row">
                    <span className="mr-2 items-center flex">
                      <BsFillTelephoneFill style={{ color: 'white' }} />
                    </span>
                    <h1>+(354) 6800 37849</h1>
                  </li>
                  <li className="mr-6 text-[15px] flex flex-row">
                    <span className=" mr-2 items-center flex">
                      <BsFillEnvelopeFill style={{ color: 'white' }} />
                    </span>
                    <h1>hello@hli.com</h1>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:col-span-4 lg:col-span-6 md:col-span-12">
              <div className="md:flex md:justify-center justify-end">
                <div className="text-[14px] text-right md:text-center">
                  <ul className="pl-0 list-none md:text-center">
                    <li className="mr-6 ml-1 text-[15px] inline-block">
                      <span className="mr-2 inline-block box-border">
                        <BsFacebook style={{ color: 'white' }} />
                      </span>
                    </li>
                    <li className="mr-6 ml-1 text-[15px] inline-block">
                      <span className="mr-2 inline-block box-border">
                        <BsTwitter style={{ color: 'white' }} />
                      </span>
                    </li>
                    <li className="mr-6 ml-1 text-[15px] inline-block">
                      <span className="mr-2 inline-block box-border">
                        <BsLinkedin style={{ color: 'white' }} />
                      </span>
                    </li>
                    <li className="mr-6 ml-1 text-[15px] inline-block">
                      <span className="mr-2 inline-block box-border">
                        <BsYoutube style={{ color: 'white' }} />
                      </span>
                    </li>
                    <li className="mr-6 ml-1 text-[15px] inline-block">
                      <span className="mr-2 inline-block box-border">
                        <BsPinterest style={{ color: 'white' }} />
                      </span>
                    </li>
                  </ul>
                </div>
                <button className="ml-10 border-l-white pl-5 text-[14px] flex flex-row items-center">
                  <span className=" mr-2 items-center flex">
                    <BsFillPersonFill style={{ color: 'white' }} />
                  </span>
                  Login / Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 py-6 px-0 shadow-md bg-white box-border z-50 text-[#000850]">
        <div className="w-[100%] container px-3 mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-[10%] mr-5">
              <img
                src={logo}
                className="max-w-[50%] h-auto align-middle"
                alt="/"
              />
            </div>
            <div className="block">
              <ul>
                <li className="relative ">
                  <button
                    className="text-[16px] flex flex-row font-semibold leading-6 capitalize"
                    onClick={() => setMenu(!menu)}
                  >
                    <span className="mr-1 items-center flex mt-1">
                      <BsFillGrid3X3GapFill style={{ color: '#000850' }} />
                    </span>
                    <h1 className="text-[16px] leading-7 font-semibold ml-2">
                      Categories
                    </h1>
                  </button>
                  <ul
                    className={
                      !menu
                        ? 'hidden'
                        : ' text-[#000850] border-[1px] absolute ml-0 mt-5 min-w-[250px] rounded-lg transition-all ease-out z-50 h-auto shadow-md bg-white py-3 px-1'
                    }
                  >
                    <li className="hover:bg-[#B8DFD8] py-2 px-5 block opacity-60 text-[16px] font-semibold leading-6 transition-all ease-in-out capitalize">
                      Design
                    </li>
                    <li className="hover:bg-[#B8DFD8] py-2 px-5 block opacity-60 text-[16px] font-semibold leading-6 transition-all ease-in-out capitalize">
                      Development
                    </li>
                    <li className="hover:bg-[#B8DFD8] py-2 px-5 block opacity-60 text-[16px] font-semibold leading-6 transition-all ease-in-out capitalize">
                      Marketing
                    </li>
                    <li className="hover:bg-[#B8DFD8] py-2 px-5 block opacity-60 text-[16px] font-semibold leading-6 transition-all ease-in-out capitalize">
                      Freelancing
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="relative block ml-6 box-border">
              <form className="flex flex-row box-border">
                <input
                  className="border-solid border-[#000850] py-2 px-5 rounded-md w-56 h-14 bg-[#f5f5f5e3] transition-all ease-in-out block font-normal text-[#212529] m-0"
                  type="text"
                  placeholder="Search for Course"
                />
                <span className="absolute mt-6 bg- w-52 items-end justify-end flex">
                  <BsSearch style={{ color: '#000850' }} />
                </span>
              </form>
            </div>
            <nav className="ml-auto cursor-pointer">
              <ul className="flex flex-row items-center justify-end text-[#000850]">
                <li className="hover:scale-110 hover:text-blue-600 mr-10 relative text-[16px] leading-7 text-left font-semibold">
                  Home
                </li>
                <li className="hover:scale-110 hover:text-blue-600 mr-10 relative text-[16px] leading-7 text-left font-semibold">
                  About
                </li>
                <li className="hover:scale-110 hover:text-blue-600 mr-10 relative text-[16px] leading-7 text-left font-semibold">
                  Courses
                </li>
                <li className="hover:scale-110 hover:text-blue-600 mr-10 relative text-[16px] leading-7 text-left font-semibold">
                  Pages
                </li>
                <li className="hover:scale-110 hover:text-blue-600 mr-10 relative text-[16px] leading-7 text-left font-semibold">
                  Blog
                </li>
                <li className="hover:scale-110 hover:text-blue-600 mr-10 relative text-[16px] leading-7 text-left font-semibold">
                  Contact
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="relative z-0 bg-[#66A7FF] pb-[120px] pt-[120px] box-border">
        <div className="w-full mx-auto container">
          <div className="items-center justify-center grid gap-x-6 gap-y-0 lg:grid-cols-2  md:grid-cols-1">
            <div className="basis-1/2 md:basis-[100%] flex">
              <div>
                <span className="text-[#000850] text-[18px] tracking-[2px] uppercase font-semibold">
                  Over 3000 Course Available
                </span>
                <h1 className="text-[48px] font-bold leading-[62px] my-5 text-white">
                  Upgrade your learning Skills & Upgrade your life
                </h1>
                <p className="mb-10 text-[18px] leading-8 text-white opacity-75">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores ullam libero magni reiciendis quam ipsa blanditiis,
                  facilis velit eaque illo?
                </p>
                <div className="flex flex-row">
                  <button className="bg-red-500 text-white hover:scale-110 mr-4 font-semibold relative capitalize py-3 px-7 text-[16px] rounded-md align-middle">
                    Find Courses
                  </button>
                  <button className="bg-white text-red-500 hover:scale-110 font-semibold relative capitalize py-3 px-7 text-[16px] rounded-md align-middle">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="flex basis-1/2 md:basis-[100%]">
              <img
                className="mt-0 pl-12 box-border w-[100%] h-auto"
                src={banner}
                alt="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
