import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import reactDom from 'react-dom';

function App() {
  return (
    <div className="App">

      <Todos></Todos>
    </div>
  );
}

function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])
  return (
    <div>
      <h1>Todos : </h1>
      {
        todos.map(todos => <UsersTodos title={todos.title} userId={todos.userId} id={todos.id} completed={todos.completed}></UsersTodos>)
      }
    </div>
  )
}


function UsersTodos(props) {
  return (
    <div className="product">
      <h1> userId :{props.userId}</h1>
      <h3> id :{props.id}</h3>
      <p>Title : {props.title}</p>
      <h4>completed :{props.completed}</h4>
    </div>


  )
}








/* function UserPost() {
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
        user.map(user => <Users title={user.title} id={user.id}></Users>)
      }

    </div>
  )
}

function Users(props) {
  return (
    <div style={{ backgroundColor: 'lightgreen', color: 'red', margin: '10px', border: '3px solid blue', borderRadius: '10px' }}>
      <h2>Title : {props.title}</h2>
      <h4>{props.id}</h4>
    </div>
  )
} */



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

export default App;
