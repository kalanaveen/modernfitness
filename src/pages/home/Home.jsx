import FAQs from '../../components/faqs/FAQs';
import Footer from '../../components/footer/Footer';
import MainHeader from '../../components/mainheader/MainHeader';
import Programs from '../../components/programs/Programs';
import Testimonials from '../../components/testimonials/Testimonials';
import Values from '../../components/values/Values';
import './home.css';

const Home = () => {
  return (
    <div>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
      <Footer/>
    </div>
  )
}

export default Home
