"use client";
import Image from "next/image";
import img from "../../Images/ConveyGureu_Orange 1.png";
import googlesvgs from "../../Svgs/Social icon.svg";
import loginsvgs from "../../Svgs/login.svg";
import "../../Css/Global.css";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleGetStarted = () => {
    if (email && password) {
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("password", password);
      router.push("/complete-profile");
    } else {
      alert("No Details Found");
    }
  };

  // //For creating the signup for new user
  // const handleSignUp = async () => {
  //   console.log(email, "sssssssssssss");
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  //For logging in the user
  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  // Creating Provider for google signin
  const provider = new GoogleAuthProvider();

  const customProps = {
    email: email,
    password: password,
  };

  // Creating the sign up from the google
  const handlegooglesignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <main className="flex lg: min-h-screen w-full   bg-white  overflow-none">
      <div className="sm:w-[50%] w-[100%] lg:px-[140px] lg:py-[182px] p-2 mx-auto flex-col justify-center items-center gap-10 inline-flex ">
        <Image className="" src={img} />
        <div className="self-stretch mx-auto  flex-col justify-start items-start gap-8 inline-flex ">
          <div className="self-stretch h-11 flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-11 flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch text-center text-gray-800 text-4xl font-semibold  leading-[44px]">
                Sign up
              </div>
            </div>
          </div>
          <div className="self-stretch  mx-auto h-[314px] rounded-xl flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-[186px] flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="text-gray-800 text-sm font-medium  leading-tight">
                    Email*
                  </div>

                  <input
                    value={email}
                    type="email"
                    className="w-full text-slate-500 text-base font-normal px-3.5 py-2.5 bg-white rounded-full shadow border border-slate-300 justify-start items-center gap-2 inline-flex leading-normal"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="self-stretch h-24 flex-col justify-start items-start gap-1.5 flex">
                <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="text-gray-800 text-sm font-medium  leading-tight">
                    Password*
                  </div>
                  <input
                    type="password"
                    value={password}
                    className="w-full text-slate-500 text-base font-normal px-3.5 py-2.5 bg-white rounded-full shadow border border-slate-300 justify-start items-center gap-2 inline-flex leading-normal"
                    placeholder="Create Your Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="self-stretch text-slate-500 text-sm font-normal  leading-tight">
                  Must be at least 8 characters.
                </div>
              </div>
            </div>
            <div className="self-stretch h-[104px] flex-col justify-start items-start gap-4 flex">
              <button className="btn-getstarted " onClick={handleGetStarted}>
                <span className="text-white text-base font-semibold leading-normal">
                  Get started
                </span>
              </button>

              <div className="self-stretch h-11 flex-col justify-start items-center gap-2 flex">
                <div className="self-stretch h-11 flex-col justify-center items-center gap-3 flex">
                  <button className="btn-signup">
                    <Image
                      className="w-6 h-6 relative"
                      src={googlesvgs}
                    ></Image>
                    <span
                      className="text-gray-800 text-base font-semibold  leading-normal"
                      onClick={handlegooglesignin}
                    >
                      Sign up with Google
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-center  mx-auto items-start gap-1 inline-flex">
            <div className="text-slate-500 text-sm font-normal  leading-tight">
              Already have an account?
            </div>
            <div className="justify-center items-center gap-2 flex">
              <a
                href="#"
                className="text-orange-500 text-sm font-semibold  leading-tight"
                onClick={handleSignIn}
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:w-[50%] w-[100%] hidden relative opacity-80 bg-gradient-to-br from-red-500 to-orange-400 sm:flex items-center justify-center">
        <Image
          fill
          className="absolute inset-0 h-full sm:w-full sm:object-cover  z-10"
          src={loginsvgs}
          alt=""
        />
        <div class="sm:w-[50%] w-[50%] hidden px-[10px] flex-col justify-center items-center gap-8 sm:inline-flex z-20">
          <div class="flex-col justify-start items-start gap-12 flex">
            <div class="flex-col justify-start items-center gap-6  flex">
              <div class=" text-white lg:text-7xl md:text-5xl text-[50px] font-bold  lg:leading-[66px] leading-10 ">
                Communicate with your customers proactively
              </div>
              <div class=" text-red-50 lg:text-[28px] md:text-[18px]  text-[18px] font-medium  leading-5">
                Reduce anxiety of your customers through pro-active
                communication
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
