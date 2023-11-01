import Image from "next/image";
import "../../Css/Global.css";
import img from "../../Images/ConveyGureu_Orange 1.png";

export default function Confirmation() {
  return (
    <div className="w-full min-h-screen bg-red-50 flex flex-col justify-start pb-10 ">
      <div className="sm:px-[52px] sm:py-8 justify-start ">
        <Image className="" src={img} />
      </div>

      <div className="py-2 pl-2  h-[450px] my-auto mx-auto flex justify-center  align-middle sm:w-[640px] sm:h-[578px] w-[80%] md:px-4 md:py-4 bg-white rounded-xl shadow text-center ">
        <div className="  my-auto mx-auto sm:p-[128px] p-[18px] ">
          <div class="text-center text-gray-900 text-3xl sm:text-4xl font-extrabold  leading-10">
            You are all set!
          </div>
          <div class="mt-10  text-center text-gray-800 text-2xl font-medium  leading-7 tracking-tight">
            Log into Convey Guru Outlook Add on to start communicate with your
            customers proactively
          </div>
          <div className=" mt-10 w-[50%] mx-auto sm:w-[50%] ">
            <button className="btn-getstarted mt-5 ">
              <span className="text-white text-base font-semibold leading-normal">
                Confirm
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
