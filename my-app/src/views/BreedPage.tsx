
import React from 'react'
import Main from '../components/Main'
import {useParams} from "react-router-dom"
import BreedCard from './../components/BreedCard';

function BreedPage() {
  const {breed} = useParams()
  if(!breed) console.log("NO BREED");

  return (
    <div className='breed'>
      {<BreedCard src={breed}/>}
    </div>
  )
}

export default BreedPage;