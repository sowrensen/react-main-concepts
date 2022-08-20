import React from 'react';
import ReactDOM from 'react-dom/client';

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

function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

class UserInfo extends React.Component {
  constructor(props) {
    super(props)

    // We shall pass this birthYear property to Age component
    this.state = { birthYear: this.props.user.birthYear }
  }

  render() {
    return (
      <div>
        <div>User: {formatName(this.props.user.firstName, this.props.user.lastName)}</div>
        <div>Birth Year: {this.props.user.birthYear}</div>
        <div>Age: <Age fromYear={2010} birthYear={this.state.birthYear}/></div>
        <div>Website: <a href={this.props.user.website} target='_blank'>Personal website</a></div>
        <br></br>
      </div>
    )
  }
}

class Age extends React.Component {
  constructor(props) {
    super(props)
    this.state = {birthYear: this.props.birthYear, fromYear: this.props.fromYear || new Date().getFullYear()}
  }

  calculateAge() {
    return this.state.fromYear - this.props.birthYear
  }

  render() {
    return (
      <>{this.calculateAge()} (On {this.state.fromYear})</>
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
      <>
        {this.state.date.toLocaleTimeString()}
      </>
    )
  }
}

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
