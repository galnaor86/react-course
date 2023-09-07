import { useSelector } from 'react-redux';
import './TotalProducts.css';
import { AppState } from '../../../Redux/AppState';

function TotalProducts(): JSX.Element {
    const count = useSelector((appState: AppState) => appState.products.length);

    return (
        <div className='TotalProducts'>
            <span>Total: {count}</span>
        </div>
    );
}

export default TotalProducts;
