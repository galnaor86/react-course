import bags from '../../../Resources/bags';
import useTitle from '../../../Utils/useTitle';
import Search from '../Search/Search';
import './Home.css';

const isWeekend = (): boolean => {
  return new Date().getDay() >= 5;
};

function Home(): JSX.Element {
  useTitle('Home');
  const randNum = Math.floor(Math.random() * 2) + 1;

  const getSaleMessage = isWeekend()
    ? 'Weekend Sale - up to 50% sale'
    : 'Weekday Sale - up to 25% sale';

  return (
    <div className='Home'>
      <Search />
      <img src={randNum === 1 ? bags[0].img : bags[1].img} width={380} />
      <p>{getSaleMessage}</p>
      <br />
      {bags.map((bag) => (
        <span key={bag.id}>{bag.name} 👜 </span>
      ))}

      <div className='bagsImgs'>
        {bags.map((bag) => (
          <div key={bag.id} className='bag'>
            <img src={bag.img} width={150}></img>
            <span>{bag.price}$</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
