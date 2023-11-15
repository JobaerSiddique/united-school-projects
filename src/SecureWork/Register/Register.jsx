import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import registers from "../../../register.json"
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

import { toast } from 'react-toastify';
import cloudinaryConfig from '../../ImageHosting/cloudinaryConfig';
const Register = () => {
  const [error,setError]= useState('')
  const {GoogleUser,createUser,updateUser}= useContext(AuthContext)

  
  const { register, formState: { errors }, handleSubmit,reset } = useForm();
  const navigate = useNavigate()
  
  const onSubmit = (data) => {
    const name = data.name;
    const email= data.email;
    const password = data.password;
    console.log(cloudinaryConfig.cloudName);
    
    console.log(name,email,password);
    createUser(email,password)
    .then(result=>{
      
      const user = result.user
      console.log(user);
    if(user){
      const file = data.file[0]
      const formData = new FormData()
      formData.append('file',file)
      formData.append('upload_preset','jobaer_up')
      fetch(`https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,{
        method:"POST",
        
        body:formData
      })
      .then(res=>res.json())
      .then(result=>{
        const images = result.secure_url
       
        updateUser(name,images)
        .then(() => {
          reset()
          toast.success("user create successfully",{
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
        }).catch((error) => {
          // An error occurred
          // ...
        });
      })
      .catch(error=>{
        setError(error.message);
      })
     
        
      
      
      
    }
      
    })
    .catch((error) => {
      setError(error.message)
      // ..
    });
  };
    




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


    return (
        <div>
            <div className="hero  bg-gradient-to-r from-purple-500 to-purple-900 gap-16 container mx-auto rounded-3xl my-16 p-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <Lottie className='w-[50%]' animationData={registers} loop={true}></Lottie>
    <div>
    <div className="card  glass w-96 ">
  <div className="card-body">
    <h1 className='text-center text-black font-bold text-xl lg:text-3xl underline'>Register </h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text font-semibold">Name</span>
    
  </label>
  <input type="text" 
  placeholder="Enter Your Name"
  {...register("name", { required: true })} 
  className="input input-bordered w-full " />
  {errors.name?.type === "required" && (
        <p className='text-rose-600 mt-3 font-semibold'>Name is required</p>
      )}
</div>
    <div className="form-control w-full mt-3 ">
  <label className="label">
    <span className="label-text font-semibold">Email</span>
    
  </label>
  <input type="email" 
  placeholder="Enter Your Email" 
  {...register("email", { required:{
    value:true,
    message:"Email is must required"
  }})} 
  className="input input-bordered w-full " />
  {errors.email?.type === "required" && (
        <p className='text-rose-600 mt-3 font-semibold'>{errors.email?.message}</p>
      )}
</div>
    <div className="form-control w-full mt-5 ">
  <label className="label">
    <span className="label-text font-semibold">Password</span>
    
  </label>
  <input type="password" 
  placeholder="Enter Your Password" 
  {...register("password", { required:{
    value:true,
    message:"password is must required"
  },
  pattern:{
    value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message:"Minimum eight characters, at least one letter and one number"

  }
})} 
  className="input input-bordered w-full " />
  {errors.password?.type === "required" && (
        <p className='text-rose-600 mt-3 font-semibold'>{errors.password?.message}</p>
      )}
  {errors.password?.type === "pattern" && (
        <p className='text-rose-600 mt-3 text-sm font-semibold'>{errors.password?.message}</p>
      )}
</div>
<div className="form-control w-full my-3 ">
  <label className="label">
    <span className="label-text font-semibold">Profile Image</span>
    
  </label>
  <input type="file" 
  placeholder="Enter Your Name"
  {...register("file", { required: true })} 
  className="input input-bordered w-full " />
  {errors.name?.type === "required" && (
        <p className='text-rose-600 mt-3 font-semibold'>Name is required</p>
      )}
</div>
   

    <p className='text-sm my-3 font-semibold'>Already have an Account ? <span className='text-lime-500'><Link to="/login" >Please login</Link></span> </p>
   
       <input type="submit" value="Register" className=' w-full text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' />
    </form>
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

export default Register;