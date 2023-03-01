import './navbar.css';
import Logo from '../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../data';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from "react-icons/md";
import { useState } from 'react';

const Navbar = () => {
  const [isNavShow, setIsNavShow] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        
        {/* logo */}
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>

        {/* nav links  */}
        <ul className={`nav__links ${isNavShow ? 'show__nav':'hide__nav'}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''}>{name}</NavLink>
              </li>
            );
          })}
        </ul>

        {/* nav buttons */}
        <button className='nav__toggle-btn' onClick={() => setIsNavShow(!isNavShow
        )}>
          {isNavShow ? <MdOutlineClose/>:<GoThreeBars/>}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
