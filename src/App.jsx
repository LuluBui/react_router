import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, Routes, Route } from 'react-router-dom';
import './App.css';
import Users from './Users';
import Posts from './Posts';
import {User} from './Users';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const { pathname } = location;
  //const user = ;
  useEffect(()=> {
    const fetchData = async()=>{
      let response = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      setUsers(response.data);
      response = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts');
      console.log(response.data);
      setPosts(response.data);
    }
    fetchData();
  } ,[]);

  return (
    <>
      <nav>
        <Link to='/' className={ pathname === '/' ? 'selected':''} >Home</Link>
        <Link to='/users' className={ pathname === '/users' ? 'selected':''} >Users ({users.length})</Link>
        <Link to='/posts' className={ pathname === '/posts' ? 'selected':''} >Posts ({posts.length})</Link>
      </nav>
      <Routes>
        <Route path='/' element= {<h1>Welcome!!</h1>} />
        <Route path='/users' element= {<Users users={users}/>} />
        <Route path='/posts' element= {<Posts posts={posts}/>} />
        <Route path='/users/:id' element= {<User users={users}/>} />
      </Routes>
    </>
  )
}

export default App
//user={user}/</>