import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import React, { useState  } from "react";
import { FcGoogle } from "react-icons/fc";
import { Toaster, toast } from "sonner";
import { Link ,useNavigate } from "react-router-dom";
import {Logo,Button,Divider,Inputbox} from "../components";


const LoginPage = () => {
  const user = {};
  const navigate = useNavigate();
  if(user.token){
    navigate('/');
  }
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const googleLogin = async () => {};

  const handleSubmit = async () => {};
  return (
    <div className=" w-full h-[100vh] flex">
      <div className="hidden md:flex flex-col gap-y-4 w-1/3 
      min-h-screen bg-black items-center justify-center">
        <Logo type="login"/>
        <span className="text-xl font-semibold
         text-white">Welcome, back!</span>
      </div>

      <div className='flex w-full md:w-2/3 h-full bg-white
       dark:bg-gradient-to-b md:dark:bg-gradient-to-r from-black
        via-[#071b3e] to-black items-center px-10 md:px-20 lg:px-40 '>
          <div className="h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="block mb-10 md:hidden">
                  <Logo />
              </div>

              <div className="max-w-md w-full space-y-8">
                 <div className="">
                    <h2 className="mt-6 text-center text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white ">
                      Sign In to your account
                      </h2>
                 </div>
                 <Button icon={<FcGoogle />} label="Sign In with Google" onClick={()=> googleLogin()} styles='w-full flex flex-row-reverse gap-4 bg-white dark:bg-transparent text-black dark:text-white px-5 py-2.5 rounded-full border border-gray-300' />

                 <Divider label="or sign in with email"/>

                 <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                     <div className="flex flex-col rounded-md shadow-sm -space-y-px gap-5">
                      <Inputbox
                       label="Email Address"
                       name="email" type="email"
                       isRequired={true}
                       placeholder='email@example.com'
                       value={data?.email}
                       onChange={handleChange}/>

                      <Inputbox
                       label="Password"
                       name="password" type="password"
                       isRequired={true}
                       placeholder='email@example.com'
                       value={data?.email}
                       onChange={handleChange}/> 
                     </div>
                     <Button
                     type="submit"
                     label="Sign In"
                     styles="group relative w-full flex justify-center dark:bg-rose-800 hover:bg-rose-700 bg-black text-white border px-4 py-2.5 2xl:py-3 rounded-full border-transparent text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 mt-8"
                     />
                 </form>

                 <div className="flex justify-center items-center dark:text-gray-300 text-gray-600">
                    <p>
                      Don't have a account?{" "}
                      <Link to='/sign-up' className='text-rose-800 font-medium'>
                         Sign up
                      </Link>
                    </p>
                 </div>
           
              </div>
          </div>
        </div>
        <Toaster />
    </div>
  );
};

export default LoginPage;