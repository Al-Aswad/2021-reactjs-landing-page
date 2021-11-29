import React from 'react'
import {Rimenu3Line, RiCloseLine} from 'react-icons/ri'

import './navbar.css'

// BEM -> Block Element Modifier

const Navbar = () => {
     return (
          <div className="gpt3__navbar">
               <div className="gpt3__navbar-link">
                    <div className="gpt3__navbar-links_logo">
                         <img src="{logo}" alt="logo" />
                    </div>
               </div>
          </div>
     )
}

export default Navbar
