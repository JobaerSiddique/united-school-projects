import React from 'react';
import pic1 from "../../images/static/classes-removebg-preview.png"
import pic2 from "../../images/static/students-removebg-preview.png"
import pic3 from "../../images/static/teachers-removebg-preview.png"
import pic4 from "../../images/static/staff-removebg-preview.png"
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Statistics = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='bg-blue-900 w-[100%] h-[auto] rounded-2xl py-10 mx-auto my-20'>
            <h1 data-aos="zoom-out" className='text-center text-2xl lg:text-5xl font-bold text-white underline mt-20'>Statistics</h1>
            <h2 data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"  data-aos-duration="2500" className='text-center text-xl lg:text-3xl font-bold text-white mt-5'>Our Organization At a Glance</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center p-16 my-10 '>
                <div className='mx-auto'>
                    <img className='w-[180px] rounded-3xl hover:scale-125' src={pic1} alt="" />
                    <p className='text-center text-white font-bold text-xl mt-10 lg:text-5xl hover:scale-125'><CountUp start={0} end={10} /></p>
                    <p className='text-center hover:scale-125 text-white font-semibold text-xl lg:text-3xl'>classes</p>
                </div>
                <div className='mx-auto'>
                <img className='w-[180px] rounded-3xl hover:scale-125' src={pic2} alt="" />
                <p className='text-center text-white font-bold hover:scale-125 text-xl mt-10 lg:text-5xl'><CountUp start={0} end={300}  /></p>
                <p className='text-center hover:scale-125 text-white font-semibold text-xl lg:text-3xl'>Students</p>
                </div>
                <div className='mx-auto'>
                <img className='w-[180px] rounded-3xl hover:scale-125' src={pic3} alt="" />
                <p className='text-center text-white hover:scale-125 font-bold text-xl mt-10 lg:text-5xl'><CountUp start={0} end={24}  /></p>
                <p className='text-center hover:scale-125 text-white font-semibold text-xl lg:text-3xl'>Teachers</p>
                </div>
                <div className='mx-auto'>
                <img className='w-[180px] rounded-3xl hover:scale-125' src={pic4} alt="" />
                <p className='text-center text-white hover:scale-125 font-bold text-xl mt-10 lg:text-5xl'><CountUp start={0} end={10}  /></p>
                <p className='text-center text-white hover:scale-125 font-semibold text-xl lg:text-3xl'>Staffs</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;