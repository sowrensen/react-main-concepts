import React from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './Clock';
import Personnel from './Personnel'

const convicts = [
  {
    firstName: 'Saul',
    lastName: 'Goodman',
    birthYear: 1960,
    website: 'https://bettercallsaul.com',
    crime: 'Money Laundering, Fraud'
  },
  {
    firstName: 'Walter',
    lastName: 'White',
    birthYear: 1958,
    website: 'https://walter-white.meth',
    crime: 'Drug Kingpin'
  },
  {
    firstName: 'Jessy',
    lastName: 'Pinkman',
    birthYear: 1984,
    website: 'https://jessy-yo.bitch',
    crime: 'Drug Dealing'
  }
]

function App() {
  return (
    <div>
      <div>
        <p><strong>Most Wanted</strong></p>
        <p>System Time: <Clock /></p>
      </div>
      <div>
        {convicts.map((person, index) => {
          return <Personnel person={person} key={index} />
        })}
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
