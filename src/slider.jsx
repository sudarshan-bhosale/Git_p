import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

function Slider() {
  const [val, setval] = useState(0);

  const handlerightimg = () => {
    setval(val + 1 < 10 ? val + 1 : 0);
  };
  const handleleftimg = () => {
    setval(val > 0 ? val - 1 : 9);
  };
  return (
    <div className="w-full h-screen  via-orange-100  flex justify-center items-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-full flex justify-center mb-5">
                <h2 className=" text-3xl font-bold text-gradient-to-r from-green-400 to-blue-500">
                Image Gallery
                </h2>
            </div>
            <div className="w-full  flex justify-center items-center">

                <div onClick={handleleftimg} className="text-3xl mr-4 bg-slate-300 w-10 h-10 rounded-full flex justify-center items-center">
                    <GoArrowLeft />
                </div>

                <div className="w-80 h-52 bg-slate-500 rounded-lg overflow-hidden ">
                    <img className={`${val === 0 ? "" : "hidden"}`}
                    src="https://images.pexels.com/photos/20881562/pexels-photo-20881562/free-photo-of-mua-v-t-ch-y-d-ng.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
                    <img className={`${val === 1 ? "" : "hidden"}`}
                    src="https://images.pexels.com/photos/1003757/pexels-photo-1003757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
                    <img className={`${val === 2 ? "" : "hidden"}`}
                     src="https://images.pexels.com/photos/9398456/pexels-photo-9398456.jpeg"
                    alt="" />
                    <img className={`${val === 3 ? "" : "hidden"}`}
                    src="https://images.pexels.com/photos/13774281/pexels-photo-13774281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="" />
                    <img className={`${val === 4 ? "" : "hidden"}`}
                        src="https://images.pexels.com/photos/12783824/pexels-photo-12783824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
                    <img className={`${val === 5 ? "" : "hidden"}`}
                     src="https://images.pexels.com/photos/1580982/pexels-photo-1580982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
                     <img className={`${val === 6 ? "" : "hidden"}`}
                        src="https://images.pexels.com/photos/2332736/pexels-photo-2332736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
                    <img className={`${val === 7 ? "" : "hidden"}`}
                        src="https://images.pexels.com/photos/2164230/pexels-photo-2164230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
                    <img className={`${val === 8 ? "" : "hidden"}`}
                        src="https://images.pexels.com/photos/5353980/pexels-photo-5353980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
                    <img className={`${val === 9 ? "" : "hidden"}`}
                        src="https://images.pexels.com/photos/5197444/pexels-photo-5197444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>                
                </div>

                <div onClick={handlerightimg} className="text-3xl ml-4 bg-slate-300 w-10 h-10 rounded-full flex justify-center items-center ">
                    <GoArrowRight />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Slider;
