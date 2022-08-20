import ReactDOM from 'react-dom/client';

const user = {
  firstName: 'Sowren',
  lastName: 'Sen',
  age: 33,
  website: 'https://sowrensen.dev'
}

function formatName (firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const helloWorld = <div>
  <div>User: {formatName(user.firstName, user.lastName)}</div>
  <div>Age: {user.age}</div>
  <div>Website: <a href={user.website} target='_blank'>Personal website</a></div>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(helloWorld)
