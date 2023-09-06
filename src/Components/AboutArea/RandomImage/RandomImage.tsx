import { useEffect, useState } from 'react';
import './RandomImage.css';
import bags from '../../../Resources/bags';

const getImage = () => {
  const randNum = Math.floor(Math.random() * 4);
  return bags[randNum].img;
};

function RandomImage(): JSX.Element {
  const [image, setImage] = useState<any>(getImage());

  useEffect(() => {
    const interval = setInterval(() => setImage(getImage()), 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='RandomImage'>
      <img src={image} width={300}></img>
    </div>
  );
}

export default RandomImage;
