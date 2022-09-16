import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Navlink = () => {
  // const [isLogin, setIsLogin] = useState(false);

  return (
    <nav className="navDiv">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        {/* <div>
          {isLogin ? <button onClick={() => {

          setIsLogin(!isLogin);
          }} >Logout</button> : <button onClick={() => {

          setIsLogin(!isLogin);

          }} >Login</button>} 
        </div> */}
    </nav>
  )
}

export default Navlink