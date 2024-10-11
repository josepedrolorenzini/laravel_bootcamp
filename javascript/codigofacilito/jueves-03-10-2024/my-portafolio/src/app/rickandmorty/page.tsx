"use client";
import { useEffect, useState } from 'react';
import './styles.modules.css';

export default function RickAndMorty() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
     .then(response => response.json())
     .then(data => setData(data.results));
  }, []);

  // {console.log(data)}
  return (
    <div>
     <h1>RickAndMorty</h1> 
      {data && data.map((character:any) =>{
        return <div key={character.id} className='product' >
          <h2 className='title'>{character.name}</h2>
          <p>{character.species}</p>
          <p>{character.origin.name}</p>
        </div>  // eslint-disable-next-line
      })}
      </div>
  )
}
