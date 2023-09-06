import useTitle from '../../../Utils/useTitle';
import './ContactUs.css';

function ContactUs(): JSX.Element {
  useTitle('Contact Us');

  return (
    <div className='ContactUs'>
      <div>
        <span>feel free to contact us:</span>
        <span>contact.us@gmail.com 📧</span>
      </div>
    </div>
  );
}

export default ContactUs;
