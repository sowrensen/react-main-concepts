import React from 'react';
import ReactDOM from 'react-dom/client';

const user = {
  firstName: 'Sowren',
  lastName: 'Sen',
  age: 33,
  website: 'https://sowrensen.dev'
}

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
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<UserInfo user={user} />)
