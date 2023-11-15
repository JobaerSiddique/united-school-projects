import React from 'react';

import pic1 from '../../images/carouselBanner/Untitled-3.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutUs = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='my-40'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5  justify-center items-center '>
                <div data-aos="fade-right" >
                <img  className='rounded-2xl w-full'  src={pic1} alt="" />
          
                </div >
                <div  data-aos="fade-left"  className='bg-cyan-100 bg-opacity-50 p-5 rounded-3xl' >
                    <h1 className='text-center text-xl lg:text-4xl font-bold underline '>About Us</h1>
                    <p className='text-justify my-10 font-semibold'>We teach student using advanced learning materials and ensure a congenial learning materials and ensure a congenial environment for connective Practice, regular test, systematic and most importantly science based activities in the classrooms targeting Academic calendar published for each year under the guidance of Minstry of Education, Dhaka Education Board. As a result this institution has been establishing its superiority both in curricular and co-curricular activities.<br/><br />

This institution has been able to acquire appraisal in the field of inter school  debate, cultural competition, essay competition and education co-curricular activities. 
With the combining effects of students, teachers, guidance and most importantly for the skilled management of the Governing Body. <br /><br />

We are determined to shape it as the best educational institution of Dhaka as well as  Bangladesh Maintaining consistency in the acquired  result and reputation. Our only expectation is to get the cordial co-operation of all to administer the institution and improve the standard of education.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;