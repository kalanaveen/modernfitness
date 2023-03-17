import Header from '../../components/header/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import './contact.css';

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae
        quia laboriosam possimus dicta harum sunt cum vero. Libero tenetur id
        blanditiis voluptatem neque, ipsam laboriosam perspiciatis iste vel
        doloremque!
      </Header>
      <section className='contact'>
        <div className='container contact__container'>
          <div className='contact__wrapper'>
            <a href="mailto:support@naveenkala.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="https://m.me/+918368846888" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
            <a href="https://wa.me/+918368846888" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
         </div>
      </section>
    </>
  );
};

export default Contact;
