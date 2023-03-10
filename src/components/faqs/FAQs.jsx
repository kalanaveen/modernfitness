import { FaQuestion } from 'react-icons/fa';
import { faqs } from '../../data';
import FAQ from '../faq/FAQ';
import SectionHead from '../sectionhead/SectionHead';
import './faqs.css';

const FAQs = () => {
  return (
    <section className='faqs'>
          <div className='container faqs__container'>
              <SectionHead icon={<FaQuestion/>} title="FAQ's" />
              <div className='faqs__wrapper'>
                  {
                      faqs.map(({id,question,answer}) => {
                          return <FAQ key={id} question={question} answer={answer} />
                      })
                  }
              </div>
      </div>
    </section>
  )
}

export default FAQs
