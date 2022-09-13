
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blog from "./components/Blog"
import Contact from './components/Contact';
import Error from './components/Error';
import Home from './components/Home';
import Navlink from './components/NavLink';

function App() {
  return (
    <BrowserRouter>
      <Navlink />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/About/:title' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
