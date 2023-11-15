import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import login from "../../../login.json"
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import Loader from '../../Shared/Loader';
import { toast } from 'react-toastify';
import { useRef } from 'react';
const Login = () => {
    const [disable,setDisable]= useState(true)
    const {user,GoogleUser,SignUser,loading,forgetPassword} = useContext(AuthContext)
    const [error,setError]= useState('')
    const emailRef = useRef()
    const navigate = useNavigate()
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])


    const vaildCapture = (e)=>{
        const User_capture = e.target.value;
        if (validateCaptcha(User_capture)==true) {
            setDisable(false);
        }
   
        else {
            setDisable(true);
        }
    }

    const handleLogIn =(e)=>{
      e.preventDefault()
      const form = e.target
      const email = form.email.value
      const password = form.password.value
      SignUser(email,password)
      .then(result=>{
        const user= result.user
        if(user){
          toast("login successfully",{
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
          navigate('/')
        }
      })
      console.log(email,password);
      
    }
    const handleGoogle = ()=>{
      GoogleUser()
      .then((result) => {
       
        const user = result.user;
       console.log(user);
       if(user){
        toast("Login successfully")
        navigate('/')
       }
       
      
      }).catch((error) => {
       console.log(error.message);
       setError(error.message)
       
       
      });
    }
    

    const handleResetPassword = event=>{
     const email=(emailRef.current.value);
     forgetPassword(email)
     .then(()=>{

     })
      
    }
    if(loading){
      return <Loader/>
    }
    return (
        <div className='container mx-auto'>
            <h1 className='my-14 text-center lg:text-5xl text-xl font-semibold text-sky-500 uppercase'>Welcome to United collegiate School </h1>
            <div className="hero w-full  bg-white">
  <div className="hero-content flex-col lg:flex-row gap-24">
        <Lottie className='w-[50%]' animationData={login} loop={true}></Lottie>
    <div>
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h1 className='text-center text-sky-700 font-bold text-xl lg:text-3xl underline'>Login </h1>
    <form onSubmit={handleLogIn} >
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text font-semibold">Email</span>
    
  </label>
  <input type="email" 
  placeholder="Enter Your Email" 
  name='email'
  ref={emailRef}
  className="input input-bordered w-full " />
  
</div>
    <div className="form-control w-full mt-5 ">
  <label className="label">
    <span className="label-text font-semibold">Password</span>
    
  </label>
  <input type="password" 
  placeholder="Enter Your Password" 
  name='password'
  className="input input-bordered w-full " />
  
</div>
    <div className="form-control w-full mt-5 ">
  <label className="label">
  <LoadCanvasTemplate />
    
  </label>
  <input 
  type='text'
  onBlur={vaildCapture}
  className="input input-bordered w-full " />
  
</div>

    <p className='text-sm my-3 font-semibold'>Are You New Student or Teacher? <span className='text-yellow-600'><Link to="/register" >Please Register</Link></span> </p>
    <div className="form-control w-full ">
   
       
        <button disabled={disable} className=' btn btn-primary'>Login</button>
</div>
    </form>
    <button className='btn btn-link my-5 text-sm' onClick={handleResetPassword}>Forget Password</button>
    <div className="divider">OR</div>
    <button onClick={handleGoogle}  className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Google</button>

    {
      error &&<div className="alert alert-error">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>{error}</span>
    </div>
    }
  </div>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;