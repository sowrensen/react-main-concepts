import React from 'react';
import ReactDOM from 'react-dom/client';

const users = [
  {
    firstName: 'Sowren',
    lastName: 'Sen',
    age: 33,
    website: 'https://sowrensen.dev'
  },
  {
    firstName: 'Walter',
    lastName: 'White',
    age: 54,
    website: 'https://walter-white.meth'
  },
  {
    firstName: 'Jessy',
    lastName: 'Pinkman',
    age: 29,
    website: 'https://jessy-yo.bitch'
  }
]

function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <div>User: {formatName(this.props.user.firstName, this.props.user.lastName)}</div>
        <div>Age: {this.props.user.age}</div>
        <div>Website: <a href={this.props.user.website} target='_blank'>Personal website</a></div>
        <br></br>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <UserInfo user={users[0]}/>
      <UserInfo user={users[1]}/>
      <UserInfo user={users[2]}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
