import React from 'react'
import { FaUserCircle,   } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi'
import { RxDividerVertical } from 'react-icons/rx'
import basket from  '../images/shopping-basket-32.png'
import { IconContext } from 'react-icons';


export const Navbar = () => {
  const iconStyles = { color: "#b3b3b3", fontSize: "1.5em" };
  const iconstyle2= {color: "#333333" }
  const iconStyles3 = {color: '#333333'}
  return (
    <header className='navbar-header'>
      <div className='navbar-1'>
      <div className='company-name child-1'>Crypto tracker</div>
      <div className='navbar-links child-1 '>
      <div className='links portfolio-link cursor child-1'>Portfolio Tracker</div>
      </div>
      
      <div className='cursor child-1'><FaUserCircle style={iconstyle2} size={25}/></div>
      </div>
      <div className='navbar-2'>
      <label type="text" placeholder='Search' className='search-container child-2'>
        <input type='text' placeholder='Search' className='input'></input>
        <span className='search-button cursor child-2'>
          <BiSearch style={iconStyles}/>
          </span>
      </label>
      <span className='setting-icon child-2'><FiSettings size={20} style={iconStyles} className='react-icon'/></span>
      <span className='setting-icon child-2'><RxDividerVertical size={30} style={iconStyles3}/></span>
      <div className='login cursor child-2'>login</div>
      <div className='get-started cursor child-2'>Get Started</div>
      <img className='cursor child-2 basket' src={basket} alt='click for basket'/>
      </div>


      



    </header>
  )
}
