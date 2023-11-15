import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Loader from '../../Shared/Loader';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Main = () => {
  const {loading} = useContext(AuthContext)
    if(loading){
    return <Loader/>
   }
    return (
       <>
       <Navbar/>
       <Outlet/>
       <Footer/>
       </>
        
    );
};

export default Main;