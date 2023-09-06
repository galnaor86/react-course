import css from './WhoAreWe.module.css';

function WhoAreWe(): JSX.Element {
  return (
    <div className={css.WhoAreWe}>
      <p>we are Northwind company</p>
      <p>all of our products are cruelty free</p>
      <p>because we love puppies and also cows</p>
    </div>
  );
}

export default WhoAreWe;
