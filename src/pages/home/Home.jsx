import FAQs from '../../components/faqs/FAQs';
import MainHeader from '../../components/mainheader/MainHeader';
import Programs from '../../components/programs/Programs';
import Values from '../../components/values/Values';
import './home.css';

const Home = () => {
  return (
    <div>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs/>
    </div>
  )
}

export default Home
