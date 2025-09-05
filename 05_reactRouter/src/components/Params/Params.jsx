import React from 'react'
import { useParams } from 'react-router-dom'

function Params() {
    const username = useParams().username;
  return (
    <div className='h-48 my-5 mx-5 bg-green-500 text-center p-5 rounded font-bold text-white text-2xl'>
      <h1>Username : {username}</h1>
    </div>
  )
}

export default Params
