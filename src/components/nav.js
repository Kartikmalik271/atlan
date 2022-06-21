import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return ( 
        // NAVBAR section for navigation
      <nav className='NavBar col-12  py-3'>
        <div className='row justify-content-center'>
          <Link className='col-12 col-lg-2' style={{color:'whitesmoke'}} to="/"><h4>CUSTOMER</h4></Link>
          <Link className='col-12 col-lg-2' style={{color:'whitesmoke'}} to="/supplier"><h4>SUPPLIER</h4></Link>
          <Link className='col-12 col-lg-2' style={{color:'whitesmoke'}} to="/territory"><h4>TERRITORY</h4></Link>
          <Link className='col-12 col-lg-2' style={{color:'whitesmoke'}} to="/category"><h4>CATEGORY</h4></Link>
        </div>
      </nav>
     );
}
 
export default Nav;