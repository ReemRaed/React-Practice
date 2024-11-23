import { useState } from 'react';
import Places from './Places.jsx';

export default  async function AvailablePlaces({ onSelectPlace }) {
  const[availablePlaces,setAvailablePlaces]=useState([]);

 const response =await  fetch('http://http://localhost:3000/places').then((response)=>{
    return response.json()
  }).then((resData)=>{
    setAvailablePlaces(resData)
  })

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
