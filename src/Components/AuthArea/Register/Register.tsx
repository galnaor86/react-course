import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import User from '../../../Models/User';
import authService from '../../../Services/AuthService';
import notification from '../../../Utils/Notification';
import './Register.css';

function Register(): JSX.Element {
    const { register, handleSubmit, formState } = useForm<User>();
    const navigate = useNavigate();

    const onFormSubmit = async (user: User) => {
        try {
            await authService.register(user);
            notification.success('Welcome!');
            navigate('/home');
        } catch (err: any) {
            notification.error(err);
        }
    };

    return (
        <div className='Register'>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <h2>Register</h2>

                <div>
                    <label>First Name: </label>
                    <input type='text' {...register('firstName')}></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type='text' {...register('lastName')}></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input type='email' {...register('email')}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type='password' {...register('password')}></input>
                </div>
                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;
