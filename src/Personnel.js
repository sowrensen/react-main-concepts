import React from "react";
import Age from './Age';

class Personnel extends React.Component {
  constructor(props) {
    super(props)

    // We shall pass this birthYear property to Age component
    this.state = { birthYear: this.props.person.birthYear, isCrimeVisible: false }
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
        <div>Name: {this.formatName(this.props.person.firstName, this.props.person.lastName)}</div>
        <div>Birth Year: {this.props.person.birthYear}</div>
        <div>Age: <Age fromYear={2010} birthYear={this.state.birthYear} /></div>
        <div>Website: <a href={this.props.person.website} target='_blank'>Personal website</a></div>
        <div>
          Crime: {this.state.isCrimeVisible ? this.props.person.crime : 'Click to reveal'} {' '}
          <button onClick={(e) => this.showCrime(this.props.person.firstName)}>{this.state.isCrimeVisible ? 'Hide' : 'Show'}</button>
        </div>
        <br></br>
      </div>
    )
  }
}

export default Personnel
