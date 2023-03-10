import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="footer logo" />
          </Link>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/"
              target={'_blank'}
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.linkedin.com/"
              target={'_blank'}
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/"
              target={'_blank'}
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.linkedin.com/"
              target={'_blank'}
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/about">Blog</Link>
          <Link to="/gallery">Case Studies</Link>
          <Link to="/plans">Events</Link>
          <Link to="/trainers">Communities</Link>
          <Link to="/contact">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/about">Contact Us</Link>
          <Link to="/gallery">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2023 VAWULENS &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
