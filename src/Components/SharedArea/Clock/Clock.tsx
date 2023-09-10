import { Component } from 'react';
import './Clock.css';
import notification from '../../../Utils/Notification';

interface ClockProps {
    format: '24h' | '12h';
}

interface ClockState {
    time: string;
}

class Clock extends Component<ClockProps, ClockState> {
    timerId: number;

    public constructor(props: ClockProps) {
        super(props);
        this.state = {
            time: '',
        };
    }

    componentDidMount(): void {
        this.timerId = window.setInterval(() => {
            const now: Date = new Date();
            const time: string = now.toLocaleTimeString('en', {
                hour12: this.props.format === '12h',
            });
            this.setState({ time });
        }, 1000);
    }

    componentWillUnmount(): void {
        clearInterval(this.timerId);
    }

    private message: string = 'Have a Good Time:';

    private showTime = (): void => {
        const now: Date = new Date();
        notification.success(`${this.message} ${now.toLocaleTimeString()}`);
    };

    public render(): JSX.Element {
        return (
            <div className='Clock'>
                <span onClick={this.showTime}>{this.state.time}</span>
            </div>
        );
    }
}

export default Clock;
