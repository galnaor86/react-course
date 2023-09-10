import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Credentials from '../../../Models/Credentials';
import authService from '../../../Services/AuthService';
import './Login.css';
import notification from '../../../Utils/Notification';

function Login(): JSX.Element {
    const { register, handleSubmit, formState } = useForm<Credentials>();
    const navigate = useNavigate();

    const onFormSubmit = async (credentials: Credentials) => {
        try {
            await authService.login(credentials);
            notification.success('Welcome back!');
            navigate('/home');
        } catch (err: any) {
            notification.error(err);
        }
    };

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <h2>Login</h2>
                <div>
                    <label>Email: </label>
                    <input type='email' {...register('email')}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type='password' {...register('password')}></input>
                </div>
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
