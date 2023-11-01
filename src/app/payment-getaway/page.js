"use client";
import Image from "next/image";
import "src/Css/Global.css";
import img from "src/Images/ConveyGureu_Orange 1.png";
import applesvg from "src/Svgs/applebtn.svg";
import creditCardBrands from "src/Svgs/creditCardBrands.svg";
import creditcardCvc from "src/Svgs/icon/creditCardCvc.svg";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import createCheckoutSession from "../FireStore";

export default function completeprofile() {
  const [persondetails, setPersondetails] = useState({});

  const YOUR_PUBLISHABLE_KEY =
    "pk_test_51O7BsqSEp7vSLBD3kAnBbYUhGhV63RFvmzseUG4WB7fsnscdy0jmXIHqV6gLfM33SD0MSe6T706iLB3Bt3byGPSc001MobyLsU";

  const handleSubmit = async () => {
    // Load Stripe with your publishable key
    const stripe = await loadStripe(YOUR_PUBLISHABLE_KEY);

    const data = {
      persondetails: persondetails && persondetails,
    };

    try {
      // Create a checkout session and get the session ID
      const sessionId = await createCheckoutSession(data);

      console.log(sessionId, "cscsccscscscscss");

      // Redirect the user to the Stripe Checkout page
      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      if (error) {
        console.error("Error redirecting to Stripe Checkout:", error);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      // Handle the error as needed (e.g., display an error message to the user)
    }
  };

  return (
    <div className="w-[100%] min-h-screen relative bg-red-50">
      <div className="sm:px-[52px] sm:py-8 justify-start ">
        <Image className="" src={img} />
      </div>
      <div className="py-2 pl-2 my-auto mx-auto   align-middle sm:w-[640px] w-[80%] sm:px-4 sm:py-4 bg-white rounded-xl shadow text-center ">
        <div className="mx-5 my-5">
          <div className="w-14  justify-start  flex text-start ">
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
          <div className="w-[90%] h-[50px] sm:mt-5 mt-2 bg-black rounded-lg border-black justify-center items-center flex">
            <Image className="h-none" src={applesvg} />
          </div>
          <div className="flex sm:mt-5 mt-2 items-center w-[90%] justify-between">
            <div class="w-[38%] h-[0px] border border-stone-300"></div>
            <div className="text-gray-500 text-sm font-normal leading-tight">
              Or pay with card
            </div>
            <div class="w-[38%]  h-[0px] border border-stone-300"></div>
          </div>

          <div className="sm:mt-5 mt-2 w-[90%]">
            <fieldset>
              <legend className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Card Details
              </legend>
              <div className="mt-2 -space-y-px rounded-md bg-white shadow-sm">
                <div className="relative flex items-center">
                  <label htmlFor="card-number" className="sr-only">
                    Card number
                  </label>
                  <input
                    type="text"
                    name="card-number"
                    id="card-number"
                    className="w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="1234 1234 1234 1234"
                    value={persondetails.cardnumber}
                    onChange={(e) => {
                      let data = persondetails;
                      data.cardnumber = e.target.value;
                      setPersondetails({ ...persondetails }, data);
                    }}
                  />

                  <div className="absolute lg:right-2 right-1 top-1/2 transform -translate-y-1/2">
                    <Image
                      src={creditCardBrands}
                      className="sm:w-200 w-20 h-auto"
                    />
                  </div>
                </div>

                <div className="flex -space-x-px">
                  <div className="w-1/2 min-w-0 flex-1">
                    <label htmlFor="card-expiration-date" className="sr-only">
                      Expiration date
                    </label>
                    <input
                      type="text"
                      className="relative block w-full rounded-none rounded-bl-md border-0 bg-transparent py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="MM / YY"
                      value={persondetails.expirationdetails}
                      onChange={(e) => {
                        let data = persondetails;
                        data.expirationdetails = e.target.value;
                        setPersondetails({ ...persondetails }, data);
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1 relative">
                    <label htmlFor="card-cvc" className="sr-only">
                      CVC
                    </label>
                    <input
                      type="text"
                      name="card-cvc"
                      id="card-cvc"
                      className="relative block w-full rounded-none rounded-br-md border-0 bg-transparent py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="CVC"
                      value={persondetails.cvc}
                      onChange={(e) => {
                        let data = persondetails;
                        data.cvc = Number(e.target.value);
                        setPersondetails({ ...persondetails }, data);
                      }}
                    />
                    <div className="absolute lg:right-2 right-1 top-1/2 transform -translate-y-1/2">
                      <Image
                        src={creditcardCvc}
                        className="sm:w-100 w-[23px]  h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="sm:mt-5 mt-2 ">
              <legend className="block text-sm font-medium leading-6 text-gray-900 text-left ">
                Name on card
              </legend>
              <div>
                <input
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Olivia Rhye"
                  value={persondetails.personname}
                  onChange={(e) => {
                    let data = persondetails;
                    data.personname = e.target.value;
                    setPersondetails({ ...persondetails }, data);
                  }}
                />
              </div>
            </div>
            <div className="sm:mt-5 mt-2 ">
              <fieldset className=" bg-white">
                <legend className="block text-sm font-medium leading-6 text-gray-900 text-left ">
                  City or region
                </legend>
                <div className="mt-2 -space-y-px rounded-md shadow-sm">
                  <div>
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="relative block w-full pl-2 rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option>Select Country</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="postal-code" className="sr-only">
                      ZIP / Postal code
                    </label>
                    <input
                      type="text"
                      className="relative block w-full pl-2 rounded-none rounded-b-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="ZIP / Postal code"
                      value={persondetails.zip}
                      onChange={(e) => {
                        let data = persondetails;
                        data.zip = e.target.value;
                        setPersondetails({ ...persondetails }, data);
                      }}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="sm:mt-5 mt-2  flex justify-between">
              <div className=" h-11 flex-col justify-start items-center gap-2 flex  ">
                <div className=" h-11 flex-col justify-center items-center gap-3 flex sm:w-40 w-13">
                  <button className="btn-signup">
                    <span className="text-gray-800 text-base font-semibold  leading-normal">
                      Cancel
                    </span>
                  </button>
                </div>
              </div>
              <div className="  text-right justify-end items-end sm:w-40 w-13">
                <button
                  type="submit"
                  className="btn-getstarted "
                  onClick={handleSubmit}
                >
                  <span className="text-white text-base font-semibold leading-normal">
                    Confirm
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
