import './Navbar.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
// import { FcMenu ,ImCross } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';


const NavBar = (props)=>{
    const [isMobile ,setIsMobile] = useState(false);
    return(
        <nav className='navbar'>
            <h3 className='logo'>Logo</h3>
            <ul className={isMobile ? "nav_links_mobile" : "nav_links"}
                onClick={()=>setIsMobile(false)}
            >
                <Link to='/' className='home'>
                    <li>Add Question</li>
                </Link>

                <Link to='/contactus' className='contactus'>
                    <li>Contact us</li>
                </Link>
            </ul>
            
            <button className="mobile_menu_icon"
                onClick={()=>setIsMobile(!isMobile)}
            >
                {isMobile?<GiHamburgerMenu

                />
                :
                <GiHamburgerMenu />
                    
                }
            </button>
        </nav>
    );

}

export default NavBar;