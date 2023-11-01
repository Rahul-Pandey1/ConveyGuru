"use client";
import Image from "next/image";
import "../../Css/Global.css";
import img from "../../Images/ConveyGureu_Orange 1.png";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function completeprofile() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [companyname, setCompanyname] = useState("");

  const handlesave = () => {
    if (name && phone && companyname) {
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("phone", phone);
      sessionStorage.setItem("companyname", companyname);
      router.push("/payment-getaway");
    } else {
      alert("No Details Found");
    }
  };

  return (
    <div className="w-full min-h-screen bg-red-50 flex flex-col justify-start pb-10 ">
      <div className="sm:px-[52px] sm:py-8 justify-start ">
        <Image className="" src={img} />
      </div>

      <div className="py-2 pl-4  h-[450px]  my-auto mx-auto justify-center  align-middle  w-[80%] sm:w-[640px] sm:h-[578px] sm:px-16 sm:py-16 bg-white rounded-xl shadow text-center ">
        <div class="mt-2 sm:mt-0 text-left  text-gray-800 text-2xl font-bold font-['Inter'] leading-7 tracking-tight">
          Complete your profile
        </div>
        <div className="flex flex-col gap-5  mt-5  w-[90%] sm:w-full    ">
          <div className=" h-[70px] flex-col justify-start  gap-1.5   flex">
            <div className=" h-[70px] flex-col justify-start  gap-1.5 flex">
              <div className="text-gray-800 text-sm font-medium  leading-tight text-left">
                Full Name
              </div>
              <input
                type="text"
                value={name}
                className="w-full text-slate-500 text-base font-normal px-3.5 py-2.5   bg-white rounded-full shadow border border-slate-300 justify-start items-center gap-2 inline-flex leading-normal"
                placeholder="Enter your Full Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className=" h-[70px] flex-col justify-start  gap-1.5   flex">
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Contact Number
            </label>
            <div className="relative rounded-fullshadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="h-full rounded-full border-0 bg-transparent py-0 pl-3 pr-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                value={phone}
                className="w-full text-slate-500 text-base font-normal pl-20 py-2.5   bg-white rounded-full shadow border border-slate-300 justify-start items-center gap-2 inline-flex leading-normal"
                placeholder="+1 (555) 987-6543"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className=" h-[70px] flex-col justify-start  gap-1.5   flex">
            <div className=" h-[70px] flex-col justify-start  gap-1.5 flex">
              <div className="text-gray-800 text-sm font-medium text-left  leading-tight">
                Company Name
              </div>
              <input
                type="text"
                value={companyname}
                className="w-full text-slate-500 text-base font-normal px-3.5 py-2.5 bg-white rounded-full shadow border border-slate-300 justify-start items-center gap-2 inline-flex leading-normal"
                placeholder="Enter your Company Name"
                onChange={(e) => setCompanyname(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="w-fit mt-5 sm:mt-10 flex justify-end items-end mx-auto sm:float-right">
          <button className="btn-getstarted " onClick={handlesave}>
            <span className="text-white text-base font-semibold leading-normal">
              Save and Next
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
