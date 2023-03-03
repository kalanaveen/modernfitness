import { FaCrown } from 'react-icons/fa';
import { programs } from '../../data';
import SectionHead from '../sectionhead/SectionHead';

const Programs = () => {
  return (
    <section className="programs">
       <div className="container programs__container">
         <SectionHead icon={<FaCrown/>} title='Programs' className='programs__head'/>
      </div>
      <div className='programs__wrapper'>
        {programs}
      </div>
    </section>
  )
}

export default Programs
