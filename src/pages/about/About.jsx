import Header from '../../components/header/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './about.css';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ducimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, ducimus.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta id
              eligendi assumenda, quisquam eaque deleniti.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta id
              eligendi assumenda, quisquam eaque deleniti.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta id
              eligendi assumenda, quisquam eaque deleniti.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta id
              eligendi assumenda, quisquam eaque deleniti.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta id
              eligendi assumenda, quisquam eaque deleniti.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta id
              eligendi assumenda, quisquam eaque deleniti.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Vision" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta id
              eligendi assumenda, quisquam eaque deleniti.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta id
              eligendi assumenda, quisquam eaque deleniti.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta id
              eligendi assumenda, quisquam eaque deleniti.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
