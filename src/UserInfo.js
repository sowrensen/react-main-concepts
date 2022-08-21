import React from "react";
import Age from './Age';

class UserInfo extends React.Component {
  constructor(props) {
    super(props)

    // We shall pass this birthYear property to Age component
    this.state = { birthYear: this.props.user.birthYear, isCrimeVisible: false }
  }

  formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  // To avoid binding manually in constructor, we can make this to a public class field
  showCrime = (name) => {
    if (!this.state.isCrimeVisible) {
      console.log(`Revealing ${name}'s crimes...`)
    }
    this.setState((prevState) => ({ isCrimeVisible: !prevState.isCrimeVisible }))
  }

  render() {
    return (
      <div>
        <div>User: {this.formatName(this.props.user.firstName, this.props.user.lastName)}</div>
        <div>Birth Year: {this.props.user.birthYear}</div>
        <div>Age: <Age fromYear={2010} birthYear={this.state.birthYear} /></div>
        <div>Website: <a href={this.props.user.website} target='_blank'>Personal website</a></div>
        <div>
          Crime: {this.state.isCrimeVisible ? this.props.user.crime : 'Click to reveal'} {' '}
          <button onClick={(e) => this.showCrime(this.props.user.firstName)}>{this.state.isCrimeVisible ? 'Hide' : 'Show'}</button>
        </div>
        <br></br>
      </div>
    )
  }
}

export default UserInfo
