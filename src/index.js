import React from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './Clock';
import Personnel from './Personnel'
import NewConvict from './NewConvict';

const convicts = [
  {
    firstName: 'Saul',
    lastName: 'Goodman',
    birthYear: 1960,
    crime: 'Money Laundering, Fraud',
    link: 'https://breakingbad.fandom.com/wiki/Jimmy_McGill'
  },
  {
    firstName: 'Walter',
    lastName: 'White',
    birthYear: 1958,
    crime: 'Drug Kingpin',
    link: 'https://breakingbad.fandom.com/wiki/Walter_White'
  },
  {
    firstName: 'Jessy',
    lastName: 'Pinkman',
    birthYear: 1984,
    crime: 'Drug Dealing',
    link: 'https://breakingbad.fandom.com/wiki/Jesse_Pinkman'
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
        <NewConvict />
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
