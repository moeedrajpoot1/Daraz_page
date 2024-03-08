import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='container-fluid headerbg  fixed-top py-2' >

    <nav className="navbar navbar-expand-lg  ">
   <div className="container-fluid ">
     <a className="navbar-brand" href="#"><img className='hlogo'  src="  /images/logo header.png   "/></a>
    
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
       <form className="d-flex mt-2" role="search">
         <input  className="form-control me-2 hinput" type="search" placeholder="Search" aria-label="Search" />
         <button className="btn btn-outline-success search " type="submit"><i className="bi bi-search  " />
 </button>
       </form>
     </div>
     <div className="collapse navbar-collapse  headerend" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2 ">
       <li className="nav-item">
         <a className="nav-link active text-white" aria-current="page" href="#"> <span > <img className='login  ' src='/images/logo log in.png  '/> </span>   </a>
       </li>
       <li className="nav-item">
         <Link className="nav-link active text-white lo h" to="/home">Login</Link>
       </li>
      
       <li className="nav-item">
         <Link className="nav-link active text-white h" aria-disabled="true" to="/about"  >Sign Up</Link>
       </li>
       <li className="nav-item dropdown">
       <a className="nav-link dropdown-toggle text-white h" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <span><img className='wlogo ' src='  /images/logo world.png '/></span> EN
       </a>
      
     </li>
   
     </ul>
     <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-2  ">
     <li className="nav-item ">
     <a className=" text-white cart h " aria-disabled="true"><i class="bi bi-cart " ></i></a>
   </li>
   </ul>
    
   </div>
 
   </div>
 
 
 
 
 
 
 
 
 
 </nav>
 
 
 
       
 
     
     
     </div> 
  )
}

export default Navbar