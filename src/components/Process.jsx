import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';

const Process = () => {
  const url = 'https://www.youtube.com/watch?v=iNjxfGJxpns';
  const start = url.indexOf('=');
  const embed = url.slice(start + 1, 60);

  return (
    <div>
      <div className="py-24 box-border mt-24">
        <div className="container mx-auto w-[100%]">
          <div className="text-left">
            <div className="mb-16 text-left justify-start flex flex-col">
              <h1 className="text-[48px] font-bold leading-[62px] text-[#000850]">
                Start your journey With us
              </h1>
              <p className="text-[16px] leading-8 mb-4 text-[#66A7FF]">
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center gap-8">
            <div className="pr-12 grid lg:grid-cols-2 md:grid-cols-1 gap-6">
              <div className="mb-8">
                <div className="mr-8 text-white rounded-full text-center bg-[#DD246E] w-14 h-14 font-semibold text-[20px] mb-5 p-3 float-left">
                  01
                </div>
                <div className="overflow-hidden">
                  <h5 className="mb-2 text-[18px] font-bold leading-5 text-[#000850]">
                    Signup with all info
                  </h5>
                  <p className="leading-8 text-[16px] text-[#5081c7]">
                    Lorem ipsum dolor seat ameat dui too consecteture elite
                    adipaising
                  </p>
                </div>
              </div>
              <div className="mb-8">
                <div className="mr-8 text-white rounded-full text-center bg-[#E2B93B] w-14 h-14 font-semibold text-[20px] mb-5 p-3 float-left">
                  02
                </div>
                <div className="overflow-hidden">
                  <h5 className="mb-2 text-[18px] font-bold leading-5 text-[#000850]">
                    Take your Admission
                  </h5>
                  <p className="leading-8 text-[16px] text-[#5081c7]">
                    Lorem ipsum dolor seat ameat dui too consecteture elite
                    adipaising
                  </p>
                </div>
              </div>
              <div className="mb-8">
                <div className="mr-8 text-white rounded-full text-center bg-[#2eb67d] w-14 h-14 font-semibold text-[20px] mb-5 p-3 float-left">
                  03
                </div>
                <div className="overflow-hidden">
                  <h5 className="mb-2 text-[18px] font-bold leading-5 text-[#000850]">
                    Learn from online
                  </h5>
                  <p className="leading-8 text-[16px] text-[#5081c7]">
                    Lorem ipsum dolor seat ameat dui too consecteture elite
                    adipaising
                  </p>
                </div>
              </div>
              <div className="mb-8">
                <div className="mr-8 text-white rounded-full text-center bg-[#2d75e0] w-14 h-14 font-semibold text-[20px] mb-5 p-3 float-left">
                  02
                </div>
                <div className="overflow-hidden">
                  <h5 className="mb-2 text-[18px] font-bold leading-5 text-[#000850]">
                    Get certificate
                  </h5>
                  <p className="leading-8 text-[16px] text-[#5081c7]">
                    Lorem ipsum dolor seat ameat dui too consecteture elite
                    adipaising
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] h-[100%]">
              <YoutubeEmbed embedId={embed} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
