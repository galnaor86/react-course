import { useState } from 'react';
import WhoAreWe from '../WhoAreWe/WhoAreWe';
import './About.css';
import RandomImage from '../RandomImage/RandomImage';
import Tune from '../Tune/Tune';
import useTitle from '../../../Utils/useTitle';
import Greetings from '../../SharedArea/Greetings/Greetings';
import Orders from '../../SharedArea/Orders/Orders';
import notification from '../../../Utils/Notification';
import LinkedIn from '../LinkedIn/LinkedIn';
import Clock from '../../SharedArea/Clock/Clock';

function About(): JSX.Element {
    useTitle('About');
    const [code, setCode] = useState<string>('');
    //   const navigate = useNavigate();
    const onButtonClick = () => {
        notification.success('secret code activated');
        setCode('gal' + Math.floor(Math.random() * 1000).toLocaleString());
        // navigate('/home');
    };

    return (
        <div className='About'>
            <Clock format={'12h'}></Clock>
            <LinkedIn></LinkedIn>
            <Greetings hour={new Date().getHours()} />
            <WhoAreWe />
            <br />
            <div>
                <button onClick={onButtonClick} className='CodeButton'>
                    activate secret code
                </button>
                {!!code.length && <span>secret code: {code}</span>}
            </div>
            <div style={{ marginTop: '130px' }}>
                <RandomImage />
            </div>
            <Tune />
        </div>
    );
}

export default About;
