import React from "react";

class Age extends React.Component {
  constructor(props) {
    super(props)
    this.state = { birthYear: this.props.birthYear, fromYear: this.props.fromYear || new Date().getFullYear() }
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

export default Age
