import React, { useState } from 'react'
import data from './Data'
import './Main.css'
import Question from './Question'
function App() {
  const [questions, setQuestion] = useState(data)

  return (
    <div className='container'>
      <h3>ata ato soja jantami na(Bangali Lang)</h3>
      <h3>question and answer :</h3>
      <section className='info'>
        {questions.map((question) => {
          return <Question key={question.id} {...question} />
        })}
      </section>
    </div>
  )
}
export default App
