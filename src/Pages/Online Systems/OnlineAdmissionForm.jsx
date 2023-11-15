import React from 'react';
import "./OnlineSystem.css"
import { useForm } from "react-hook-form"
const OnlineAdmissionForm = () => {
    const {register,formState: { errors },handleSubmit,reset} = useForm()
      const onSubmit = (data) => {
        console.log(data)
      }
    
    return (
        <div className='img bg-fixed  py-10'>
            <div><h1 className='text-center text-xl md:text-2xl lg:text-5xl my-16 text-black font-semibold'>Welcome to UCS Online Admission System</h1></div>
            
          <div className='container mx-auto my-20'>
          <div className="card w-full glass  ">
  <div className="card-body">
  
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-14'>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Student Name</span>
    
  </label>
  <input type="text" placeholder="Enter Student Name"
    {...register("name", { required:{
      value:true,
      message:"Student Name Must be required"
    }})} 
  className="input input-bordered w-full " />
   {errors.name?.type === "required" && (
        <p className='text-red-500 mt-5 '>{errors.name?.message}</p>
      )}
</div>         
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Student Father Name</span>
    
  </label>
  <input type="text" placeholder="Enter Student Father Name"
    {...register("fatherName", { required:{
      value:true,
      message:"Father Name Must be required"
    }})} 
  className="input input-bordered w-full " />
   {errors.fatherName?.type === "required" && (
        <p className='text-red-500 mt-5 '>{errors.fatherName?.message}</p>
      )}
</div>         
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Student Mother Name</span>
    
  </label>
  <input type="text" placeholder="Enter Student Mother Name"
    {...register("motherName", { required:{
      value:true,
      message:"Mother Name Must be required"
    } })} 
  className="input input-bordered w-full " />
   {errors.motherName?.type === "required" && (
        <p className='text-red-500 mt-5 '>{errors.motherName?.message}</p>
      )}
</div>         
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Student Photo</span>
    
  </label>
  <input type="file" 
  {...register("photo", { required: {
    value:true,
    message:"Photo Must be required"
  }})}
  className="file-input file-input-bordered file-input-info w-full " />
   {errors.photo?.type === "required" && (
        <p className='text-red-500 mt-5 '>{errors.photo?.message}</p>
      )}
</div>         
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Student Admission Class</span>
    
  </label>
  <select className="select select-info w-full " {...register("class", { required: {
    value:true,
    message:"Admission class Must be required"
  }})}>
  <option disabled >Select class</option>
        <option>Play</option>
        <option>Nursury</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
        <option>Four</option>
        <option>Five</option>
        <option>Six</option>
        <option>Seven</option>
        <option>Eight</option>
        <option>Nine</option>
  
</select>
   {errors.class?.type === "required" && (
        <p className='text-red-500 mt-5 '>{errors.class?.message}</p>
      )}
</div>         
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Father occupation</span>
    
  </label>
  <input type="text" placeholder="Enter Father occupation"
    {...register("fatherJob", { required: {
      value:true,
      message:"Father Occupation must be required"
    } })} 
  className="input input-bordered w-full " />
   {errors.fatherJob?.type === "required" && (
        <p className='text-red-500 mt-5 '>{errors.fatherJob?.message}</p>
      )}
</div>         
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Mother occupation</span>
    
  </label>
  <input type="text" placeholder="Enter Mother occupation"
    {...register("motherJob", { required:{
      value:true,
      message:"Mother Occupation must be required"
    }})} 
  className="input input-bordered w-full " />
   {errors.motherJob?.type === "required" && (
        <p className='text-red-500 mt-5 '>{errors.motherJob?.message}</p>
      )}
</div>         
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Student Birth Certicate No</span>
    
  </label>
  <input type="number" placeholder="Enter Student Birth Certificate Number"
    {...register("birthNumber", { required:{
      value:true,
      message:"Birth Number must be Required"
    },
    min: 17
  })} 
  className="input input-bordered w-full " />
   {errors.birthNumber?.type === "required" && (
        <p className='text-red-500 mt-5 '>{errors.birthNumber?.message}</p>
      )}
   {errors.birthNumber?.type === "min" && (
        <p className='text-red-500 mt-5 '>Please 17 digits Number must be required</p>
      )}
</div>         
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Father NID Card No</span>
    
  </label>
  <input type="text" placeholder="Enter Father Nid Number"
    {...register("fnid", { required: {
      value:true,
      message:"Father Nid Must be required"
    }})} 
  className="input input-bordered w-full " />
   {errors.fnid?.type === "required" && (
        <p className='text-red-500 mt-5 '>{errors.fnid?.message}</p>
      )}
</div>         
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Mother NID Card No</span>
    
  </label>
  <input type="text" placeholder="Enter Mother Nid Number"
    {...register("mnid", { required: {
      value:true,
      message:"Mother Nid Must be required"
    } })} 
  className="input input-bordered w-full " />
   {errors.mnid?.type === "required" && (
        <p className='text-red-500 mt-5 '>{errors.mnid?.message}</p>
      )}
</div>         
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Father Mobile Number</span>
    
  </label>
  <input type="text" placeholder="Enter Student Name"
    {...register("firstName", { required: true })} 
  className="input input-bordered w-full " />
   {errors.firstName?.type === "required" && (
        <p className='text-red-500 mt-5 '>Father Mobile Number must be required</p>
      )}
</div>         
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Mother Mobile Number</span>
    
  </label>
  <input type="text" placeholder="Enter Student Name"
    {...register("firstName")} 
  className="input input-bordered w-full " />
   
</div>         
          
          
     
    </div>
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14 justify-center items-center my-5'>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Student Present Address</span>
    
  </label>
  <textarea placeholder="Enter Present Address" 
   {...register("presentAdde", { required: true })} 
  className="textarea textarea-bordered textarea-lg w-full " />
   {errors.presentAdde?.type === "required" && (
        <p className='text-red-500 mt-5 '>Present Adderess Must be required</p>
      )}
</div> 
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Student Permanent Address</span>
    
  </label>
  <textarea placeholder="Enter Permanent Address" 
   {...register("permanentadde", { required: true })} 
  className="textarea textarea-bordered textarea-lg w-full " />
   {errors.permanentadde?.type === "required" && (
        <p className='text-red-500 mt-5 '>PermanentAdderess Must be required</p>
      )}
</div> 
    </div>
      <input type="submit" value="Application Submit" className='btn btn-outline btn-warning w-full' />
 </form>
  
    
  </div>
</div>
          </div>
               
              
            
        </div>
    );
};

export default OnlineAdmissionForm;