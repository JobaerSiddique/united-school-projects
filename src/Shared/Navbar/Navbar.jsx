import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/other/united logo.png"
import { CiFacebook } from 'react-icons/ci';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import Loader from '../Loader';
const Navbar = () => {
   const {user,logOut,loading}= useContext(AuthContext)
   const menuItem = <>
    <li ><Link to="/" className='hover:border-t-4 border-violet-950 hover:bg-yellow-400'>Home</Link></li>
      <li tabIndex={0} className='dropdown dropdown-hover'>
        <details>
          <summary className='hover:border-t-4 border-violet-950 hover:bg-yellow-400'>Admission</summary>
          <ul className=" p-3 dropdown dropdown-hover bg-green-500 z-[10]">
            <li><Link className='hover:border-t-4 border-violet-950 hover:bg-yellow-400'>School Section</Link></li>
            <li><Link className='hover:border-t-4 border-violet-950 hover:bg-yellow-400'>Cadet Section</Link></li>
          </ul>
        </details>
      </li>
      <li><Link className='hover:border-t-4 border-violet-950 hover:bg-yellow-400' >Academic</Link></li>
      <li><Link className='hover:border-t-4 border-violet-950 hover:bg-yellow-400'>Notice</Link></li>
      <li><Link className='hover:border-t-4 border-violet-950 hover:bg-yellow-400'>Contact</Link></li>
      <li><Link to="/onlineAdmission" className='hover:border-t-4 border-violet-950 hover:bg-yellow-400'>Online Admission</Link></li>
      {
        user ? <li><button onClick={logOut} > LogOut<span>{user.displayName}</span></button></li>:<li><Link to="/login" className='hover:border-t-4 border-violet-950 hover:bg-yellow-400'>Login</Link></li>
      }
      {
        user && <li><div className="avatar">
        <div className="w-8 rounded-full">
          <img src={user.photoURL} />
        </div>
      </div>
      </li>
      }
   
   </>
  if(loading){
    return <Loader/>
  }
  return (
        <div className="navbar bg-cyan-300  text-black font-semibold text-base uppercase">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-green-500 rounded-box w-52">
     {menuItem}
      </ul>
    </div>
    <Link to="/"  className='lg:flex justify-center items-center '><img className='hover:scale-125 mr-2 w-[60px] ' src={logo}  alt="" /><span className='text-black font-semibold uppercase text-sm hover:text-white hover:font-bold'>United Collegiate School</span></Link>
  </div>
 
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-2 z-[10] ">
     {menuItem}
    </ul>
  </div>
  <div className='navbar-end'>
    <a href="https://www.facebook.com/profile.php?id=100057196610024" target="_blank" className='lg:text-3xl text-xl  hover:text-sky-600 hover:scale-125 '><CiFacebook/></a>
  </div>
  
</div>
    );
};

export default Navbar;