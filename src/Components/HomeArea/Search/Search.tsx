import { ChangeEvent, useState } from 'react';
import './Search.css';

function Search(): JSX.Element {
  const [searchedText, setSearchedText] = useState<string>();

  const onSearchSubmit = () => {};

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchedText(event.target.value);
  };

  return (
    <div className='Search'>
      <div>
        <input
          onChange={onSearchChange}
          type='text'
          value={searchedText}
        ></input>
        <button onClick={onSearchSubmit}>🔎</button>
      </div>
    </div>
  );
}

export default Search;
