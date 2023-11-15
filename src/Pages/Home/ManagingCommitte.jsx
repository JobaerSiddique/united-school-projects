import React, { useEffect } from 'react';
import "./ManagingCommitte.css"
import shah from "../../images/other/shah-removebg-preview.png"
import babu from "../../images/other/322895642_854732855739944_8165580395804441746_n-removebg-preview.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const ManagingCommitte = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='managing bg-fixed h-auto p-10 bg-opacity-70 rounded-3xl my-10 '>
            <h1 data-aos="zoom-out-down" className='text-center uppercase font-semibold lg:font-bold text-2xl lg:text-5xl underline'>Managing <span className='text-blue-600'>Committee</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 justify-center items-center  my-10'>
                <div data-aos="fade-right" data-aos-duration="2000" >
                <div className="card  glass hover:scale-95 hover:bg-blue-500 hover:text-white ">
  <figure><img className='w-[35%] rounded-full border  border-blue-500 hover:border-black mt-20' src={babu} alt="car!"/></figure>
  <div className="card-body">
    <h2 className=" uppercase text-center text-xl font-bold lg:text-3xl ">Munshi md. shahjahan</h2>
    <p className='text-center text-base lg:text-xl text-blue-800 font-bold uppercase'>Chairman</p>
    <p className='text-center text-base lg:text-xl uppercase text-blue-800' >Contact No  : +8801919-460085</p>
  </div>
</div>
                </div>
                <div data-aos="fade-left" data-aos-duration="2500">
                <div className="card glass hover:scale-95 hover:bg-blue-500">
  <figure><img className='w-[35%] rounded-full border border-blue-500 hover:border-black mt-20' src={shah} alt="car!"/></figure>
  <div className="card-body">
  <h2 className=" uppercase text-center text-xl font-bold lg:text-3xl "> md. shah Alam</h2>
    <p className='text-center text-base lg:text-xl text-blue-800 font-bold uppercase'>Chairman</p>
    <p className='text-center text-base lg:text-xl uppercase text-blue-800' >Contact No  : +8801756-11111</p>
    
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default ManagingCommitte;