import React from "react";
import Age from './Age';

class UserInfo extends React.Component {
  constructor(props) {
    super(props)

    // We shall pass this birthYear property to Age component
    this.state = { birthYear: this.props.user.birthYear }
  }

  formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }


  render() {
    return (
      <div>
        <div>User: {this.formatName(this.props.user.firstName, this.props.user.lastName)}</div>
        <div>Birth Year: {this.props.user.birthYear}</div>
        <div>Age: <Age fromYear={2010} birthYear={this.state.birthYear} /></div>
        <div>Website: <a href={this.props.user.website} target='_blank'>Personal website</a></div>
        <br></br>
      </div>
    )
  }
}

export default UserInfo
