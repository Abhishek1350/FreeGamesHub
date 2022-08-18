import React from 'react'
import { useParams } from 'react-router-dom'


const Game = () => {
  const {gameId} = useParams();

  return (
    <div>Game {gameId}</div>
  )
}

export default Game