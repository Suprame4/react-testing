import React, { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const [showHidden, setShowHidden] = useState(false);
  const [search, setSearch] = useState('');

  function handleChange (event) {
    setSearch(event.target.value);
  }

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  }

  function toggleHidden() {
    setShowHidden(!showHidden);
  }

  function Search({ value, onChange, children }) {
    return (
      <div>
        <label htmlFor="search">{children}</label>
        <input
          id="search"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }

  const color = theme === 'light' ? '#333' : '#FFF';
  const backgroundColor = theme === 'light' ? '#FFF' : '#333';

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <div className='container'>
      <div>
        <h1>Welcome, party people!</h1>
        <p>Click the button to toggle the theme</p>

        <button onClick={toggleTheme}>Current theme: {theme}</button>

        <button onClick={toggleHidden}>
          {showHidden ? 'Hide' : 'Show'} hidden content
        </button>

        {showHidden && (
          <div>
            <p>this content is hidden by default</p>
          </div>
        )}
      </div>
      <div>
        <Search value={search} onChange={handleChange}>
          Search:
        </Search>

        <p>Searches for {search ? search : '...'}</p>
      </div>
    </div>
  );
}


export { App };
