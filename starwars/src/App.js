import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Character from './components/Character'

const App = () => {
  const [charData, setCharData] = useState('');

  useEffect(() => {
    Axios.get('https://swapi.py4e.com/api/people/')
      .then(res=>{
        setCharData(res.data.results)
      })
      .catch(err=>{
        console.log(err)
      });
  }, [])

  const charRes = Object.entries(charData);
  console.log('Control: ', Object.entries(charData))
  console.log("Test: ", charRes)


  return (
    <div className="App">
      {charRes.map( item => {
        return <Character characters={item[1]} />
      })}
    </div>
  );
}

export default App;
