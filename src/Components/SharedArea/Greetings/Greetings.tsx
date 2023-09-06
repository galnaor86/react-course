import { memo } from 'react';
import './Greetings.css';

interface GreetingsProps {
    hour: number;
}

function Greetings({ hour }: GreetingsProps): JSX.Element {
    const getGreeting = () => {
        if (hour >= 6 && hour <= 10) return 'Good Morning 🌝';
        if (hour >= 11 && hour <= 15) return 'Good Afternoon 🌄';
        if (hour >= 16 && hour <= 20) return 'Good Evening 🌆';
        return 'Good Night 🌚';
    };

    return (
        <div className='Greetings'>
            <span>{getGreeting()}</span>
        </div>
    );
}

export default memo(Greetings); // Higher Order Component (HOC) - lets you skip re-rendering a component when its props are unchanged
