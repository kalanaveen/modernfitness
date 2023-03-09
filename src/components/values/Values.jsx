import './values.css';
import Image from '../../images/values.jpg';
import SectionHead from '../sectionhead/SectionHead';
import { GiCutDiamond } from 'react-icons/gi';
import { values } from '../../data';
import Card from '../../ui/Card';

const Values = () => {
  return (
    <section>
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="values_image" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            voluptates.
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return <Card className='values__value'>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{desc}</small>
               </Card>
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
