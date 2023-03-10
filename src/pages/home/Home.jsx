import FAQs from '../../components/faqs/FAQs';
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
      <Testimonials/>
    </div>
  )
}

export default Home
