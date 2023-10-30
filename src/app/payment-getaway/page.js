"use client";
import Image from "next/image";
import "../../Css/Global.css";
import img from "../../Images/ConveyGureu_Orange 1.png";
import applesvg from "../../Svgs/applebtn.svg";
import { useRouter } from "next/navigation";

export default function completeprofile() {
  return (
    <div className="w-[100%] min-h-screen relative bg-red-50">
      <div className="sm:px-[52px] sm:py-8 justify-start ">
        <Image className="" src={img} />
      </div>
      <div className="py-2 pl-2 my-auto mx-auto   align-middle lg:w-[640px] w-[80%] md:px-4 md:py-4 bg-white rounded-xl shadow text-center ">
        <div className="ml-7">
          <div className="w-64  justify-start  flex text-start ">
            <div className="text-gray-900 text-4xl font-extrabold  leading-10">
              £9.99
            </div>
            <div className="text-gray-500 text-base font-medium  leading-normal">
              /month
            </div>
          </div>
          <h1 className="  text-gray-500 text-sm font-normal text-start">
            First month free.
          </h1>
          <div className="w-[90%] h-[50px] mt-5 bg-black rounded-lg border-black justify-center items-center flex">
            <Image className="h-none" src={applesvg} />
          </div>
          <div className="flex mt-5 items-center w-[90%] justify-between">
            <div class="w-[38%] h-[0px] border border-stone-300"></div>
            <div className="text-gray-500 text-sm font-normal leading-tight">
              Or pay with card
            </div>
            <div class="w-[38%]  h-[0px] border border-stone-300"></div>
          </div>
          <div className="mt-5 w-[90%]">
            <fieldset>
              <legend className="block text-sm font-medium leading-6 text-gray-900 text-left ">
                Card Details
              </legend>
              <div className="mt-2 -space-y-px rounded-md bg-white shadow-sm">
                <div>
                  <label htmlFor="card-number" className="sr-only">
                    Card number
                  </label>
                  <input
                    type="text"
                    name="card-number"
                    id="card-number"
                    className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="1234 1234 1234 1234"
                  />
                  
                </div>
                <div className="flex -space-x-px">
                  <div className="w-1/2 min-w-0 flex-1">
                    <label htmlFor="card-expiration-date" className="sr-only">
                      Expiration date
                    </label>
                    <input
                      type="text"
                      name="card-expiration-date"
                      id="card-expiration-date"
                      className="relative block w-full rounded-none rounded-bl-md border-0 bg-transparent py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <label htmlFor="card-cvc" className="sr-only">
                      CVC
                    </label>
                    <input
                      type="text"
                      name="card-cvc"
                      id="card-cvc"
                      className="relative block w-full rounded-none rounded-br-md border-0 bg-transparent py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          {/* <div className="w-64  justify-start items-end gap-1 inline-flex">
          <div className="text-gray-900 text-4xl font-extrabold  leading-10">
            £9.99
          </div>
          <div className="text-gray-500 text-base font-medium  leading-normal">
            /month
          </div>
        </div>
        <div className="w-[468px] h-[422px]  ">
          <div className="w-[468px] h-11   ">
            <div className="w-40 h-11 px-[18px] py-2.5 left-[308px] top-0  bg-gradient-to-br from-red-500 to-orange-400 rounded-full shadow border border-red-500 justify-center items-center gap-2 inline-flex">
              <div className="text-white text-base font-semibold  leading-normal">
                Confirm
              </div>
            </div>
            <div className="w-40 h-11 px-[18px] py-2.5 left-0 top-0  bg-white rounded-full shadow border border-gray-300 justify-center items-center gap-2 inline-flex">
              <div className="text-slate-700 text-base font-semibold  leading-normal">
                Cancel
              </div>
            </div>
          </div>
         
          <div className="w-[468px] h-[70px] left-0 top-[138px]  flex-col justify-start items-start gap-1.5 inline-flex">
            <div className=" h-[70px] flex-col justify-start items-start gap-1.5 flex">
              <div className="text-slate-700 text-sm font-medium  leading-tight">
                Name on card
              </div>
              <div className=" px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                  <div className="grow shrink basis-0 text-gray-900 text-base font-normal  leading-normal">
                    Olivia Rhye
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[468px] h-[114px] left-0 top-[232px]  flex-col justify-start items-start gap-1.5 inline-flex">
            <div className=" h-[114px] flex-col justify-start items-start gap-1.5 flex">
              <div className="text-slate-700 text-sm font-medium  leading-tight">
                City or region
              </div>
              <div className=" h-[88px] flex-col justify-start items-start flex">
                <div className=" px-3.5 py-2.5 bg-white rounded-tl-lg rounded-tr-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-gray-900 text-base font-normal  leading-normal">
                      United Kingdom
                    </div>
                  </div>
                </div>
                <div className=" px-3.5 py-2.5 bg-white rounded-bl-lg rounded-br-lg shadow border-l border-r border-b border-gray-300 justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                    <div className="grow shrink basis-0 text-gray-900 text-base font-normal  leading-normal">
                      Postcode
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-6 h-6 left-[430px] top-[284px] "></div>
          <div className="w-6 h-6 pl-px pt-[3px] pb-1 left-[432px] top-[80px]  justify-center items-center inline-flex">
            <div className="w-[23px] h-[17px] relative flex-col justify-start items-start flex"></div>
          </div>
        </div>
        <div className="w-40 h-[0px] left-[488px] top-[388px]  border border-stone-300"></div>
        <div className="w-40 h-[0px] left-[796px] top-[388px]  border border-stone-300"></div>  */}
        </div>
      </div>
    </div>
  );
}
