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
        <ul>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>

        {/* nav buttons */}
        <button>
          <GoThreeBars />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
