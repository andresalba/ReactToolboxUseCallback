import React, { useCallback, useState } from 'react';
import List from './List.js';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => { //returns the entire function
    return [number, number+1, number+2]
  }, [number]) //changes only when number changes

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF': '#333'
  }

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark( prevDark => !prevDark )}>
        Toggle theme
      </button>
      <List getItems={getItems}/>
    </div>
  );
}

export default App;
