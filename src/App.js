
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blog from "./components/Blog"
import Contact from './components/Contact';
import Error from './components/Error';
import Home from './components/Home';
import Navlink from './components/NavLink';
import Protect from './components/Protect';
import User from './components/user';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Navlink />
      <div className='loginButton'>

        {isLogin ? <button onClick={() => {

          setIsLogin(!isLogin);
        }} >Logout</button> : <button onClick={() => {

          setIsLogin(!isLogin);

        }} >Login</button>} 

      </div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<Protect isLogin={isLogin}>
          <About/> 
        </Protect>}/>
        <Route path='/About/:title' element={<Blog/>}/>
        <Route path='/user' element={<User />} />
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
