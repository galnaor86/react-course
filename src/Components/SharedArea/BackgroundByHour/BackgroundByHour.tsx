import { FC } from 'react';
import './BackgroundByHour.css';

function BackgroundByHour(InnerComponent: FC): FC {
    const getColorByHour = () => {
        let hour = new Date().getHours();
        hour > 12 && (hour = 24 - hour);
        const hue = Math.floor((hour * 255) / 12);
        return `rgb(${hue},${hue},${hue})`;
    };

    const style = {
        backgroundColor: getColorByHour(),
        display: 'inline-block',
    };

    return function (props: any) {
        return (
            <div className='BackgroundByHour' style={style}>
                <InnerComponent {...props} />
            </div>
        );
    };
}

export default BackgroundByHour;
