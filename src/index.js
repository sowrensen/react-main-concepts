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

function UserInfo(props) {
  return (
    <div>
      <div>User: {formatName(props.user.firstName, props.user.lastName)}</div>
      <div>Age: {props.user.age}</div>
      <div>Website: <a href={props.user.website} target='_blank'>Personal website</a></div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<UserInfo user={user}/>)
