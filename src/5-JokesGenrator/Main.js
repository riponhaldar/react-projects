import React, { useEffect, useState } from 'react'
import './Main.css'

const url = 'http://api.icndb.com/jokes/random'

function Main() {
  const [joke, setJokes] = useState('')
  const gjokes = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJokes(data.value.joke))
  }
  useEffect(() => {
    gjokes()
  }, [])
  return (
    <div className='box'>
      <h2>your Jokes</h2>
      <p dangerouslySetInnerHTML={{ __html: joke }}></p>

      <button onClick={gjokes}>click this button</button>
    </div>
  )
}

export default Main
