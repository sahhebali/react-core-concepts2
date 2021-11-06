import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import reactDom from 'react-dom';

function App() {
  return (
    <div className="App">
      <UserPost></UserPost>

    </div>
  );
}

function UserPost() {
  const [user, setUserPost] = useState([]);
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setUserPost(data))
  }, [])
  return (
    <div>
      <div>External Post</div>
      {
        user.map(user => <Users title={user.title}></Users>)
      }

    </div>
  )
}

function Users(props) {
  return (
    <div>
      <p>title :{props.title}</p>
    </div>
  )
}

















export default App;
/* amar pracktice */
/* function ExternalUser() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  return (
    <div>
      <h1>External:</h1>
      {
        user.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props) {
  return (
    <div style={{ backgroundColor: 'salmon', color: 'black', border: '3px solid blue', margin: '10px' }}>
      <h3>Name : {props.name}</h3>
      <p>email : {props.email}</p>
    </div>
  )
} */

/* ----------------------------------------- */

/* function ExternalUser() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  return (
    <div>
      <h3>External User</h3>
      {
        user.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div >
      <h3>Name :{props.name} </h3>
      <p>Email: {props.email}</p>
    </div>
  )
} */




/* men vdo dekhe pracktice  */
/* function Counter() {
  const [count, setCount] = useState(5);
  const handleIncries = () => setCount(count + 1);
  const handleDecries = () => setCount(count - 1);


          return (
          <div>
            <h1>Count : {count}</h1>
            <button onClick={handleDecries}>decries</button>
            <button onClick={handleIncries}>Incries</button>

          </div>
          )
} */




/* function Counter() {
  const [count, setCount] = useState(5);
  const handleIncries = () => setCount(count + 1);
  const handleDcries = () => setCount(count - 1);


  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleDcries}>Decries</button>
      <button onClick={handleIncries}>Incries</button>
    </div>
  )
} */
