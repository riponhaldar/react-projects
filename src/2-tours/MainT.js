import React, { useState, useEffect } from 'react'
import testUtils from 'react-dom/test-utils'
import Loding from './Loding'
import Tours from './Tours'
import './MainT.css'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function MainT() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loding />
      </main>
    )
  }
  // this is no more
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>
            {' '}
            Refress
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default MainT
