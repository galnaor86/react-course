import './Tune.css';
import audioSource from '../../../Assets/Audio/TheDesert.wav';
import { RefObject, useRef } from 'react';

function Tune(): JSX.Element {
  const audioRef: RefObject<HTMLAudioElement> = useRef();

  const onPlay = () => {
    audioRef.current.play();
  };

  const onPause = () => {
    audioRef.current.pause();
  };

  const onStop = () => {
    audioRef.current.load();
  };

  return (
    <div className='Tune'>
      <audio src={audioSource} ref={audioRef} />
      <button onClick={onPlay}>⏯</button>
      <button onClick={onPause}>⏸</button>
      <button onClick={onStop}>⏹</button>
    </div>
  );
}

export default Tune;
