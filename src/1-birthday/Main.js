import React, { useState } from 'react'
import Data from './Data'
import List from './List'
import './main.css'
function Main() {
  const [people, setPeole] = useState(Data)

  return (
    <main>
      <section className='container'>
        <h3> {people.length} Birthday Today</h3>
        <List people={people} />
        <button onClick={() => setPeole([])}> clear all</button>
      </section>
    </main>
  )
}

export default Main
