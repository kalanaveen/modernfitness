import './navbar.css';
import Logo from '../../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../data';
import { GoThreeBars } from 'react-icons/go';

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        
        {/* logo */}
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>

        {/* nav links  */}
        <ul className='nav__links'>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''}>{name}</NavLink>
              </li>
            );
          })}
        </ul>

        {/* nav buttons */}
        <button className='nav__toggle-btn'>
          <GoThreeBars />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
