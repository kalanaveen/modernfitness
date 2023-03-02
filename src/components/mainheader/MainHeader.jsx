import { Link } from 'react-router-dom';
import Image from '../../images/main_header.png';
import './mainHeader.css';

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        {/* left header  */}
        <div className="main__header-left">
          <h4>#100DaysOfWorkout</h4>
          <h1>join The Modern Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            provident impedit laboriosam nesciunt asperiores blanditiis?
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>

        {/* right header  */}
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="header__image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
