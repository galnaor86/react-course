import './BackgroundByHour.css';

function BackgroundByHour(): JSX.Element {
    const getColorByHour = () => {
        let hour = new Date().getHours();
        hour > 12 && (hour = 24 - hour);
        const hue = Math.floor((hour * 255) / 12);
        return `rgb(${hue},${hue},${hue})`;
    };

    return <div className='BackgroundByHour'></div>;
}

export default BackgroundByHour;
