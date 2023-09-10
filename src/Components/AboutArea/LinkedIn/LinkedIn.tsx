import { useContext } from 'react';
import { ThemeContext } from '../../../Utils/Context';
import './LinkedIn.css';

function LinkedIn(): JSX.Element {
    const appTheme = useContext(ThemeContext);
    return (
        <div className='LinkedIn' style={appTheme}>
            <p>our linkedin page: http://linkedin.com/northwind</p>
        </div>
    );
}

export default LinkedIn;
