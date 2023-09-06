import './Spinner.css';
import loading from '../../../Assets/Images/loading.gif';

function Spinner(): JSX.Element {
    return (
        <div className='Spinner'>
            <div>
                <img src={loading} width={80}></img>
            </div>
        </div>
    );
}

export default Spinner;
