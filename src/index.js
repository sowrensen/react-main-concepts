import React from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './Clock';
import UserInfo from './UserInfo'

const users = [
  {
    firstName: 'Saul',
    lastName: 'Goodman',
    birthYear: 1960,
    website: 'https://bettercallsaul.com'
  },
  {
    firstName: 'Walter',
    lastName: 'White',
    birthYear: 1958,
    website: 'https://walter-white.meth'
  },
  {
    firstName: 'Jessy',
    lastName: 'Pinkman',
    birthYear: 1984,
    website: 'https://jessy-yo.bitch'
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
        {users.map((user, index) => {
          return <UserInfo user={user} key={index} />
        })}
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
