import React from 'react';
import ReactDOM from 'react-dom/client';

const users = [
  {
    firstName: 'Saul',
    lastName: 'Goodman',
    age: 48,
    website: 'https://bettercallsaul.com'
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

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    this.setState((prevState, props) => ({ date: new Date() }))
    // We can do this like following:
    // this.setState({date: new Date()})
    // But there's a catch due to the asynchronous nature of the state,
    // so if something like this.setState({counter: this.state.counter + this.increment})
    // is written, it might result into error. In that case use an arrow function like we used.
  }

  render() {
    return (
      <div>
        <p><strong>Most Wanted</strong></p>
        <p>System Time: {this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Clock />
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
