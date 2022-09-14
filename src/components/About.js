import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Blogs } from './Blogs';

const About = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState(Blogs);

  const trancateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <>
      <div className='sizing'> 
        <section>
          {
            blogs.map((blog) => {
              const {id, title, Desc} = blog;
              return <article key={id}>
                  <h2>{title}</h2>
                  <p>{trancateString(Desc, 300)}</p>
                  <Link to={title} state={{id, title, Desc}}>Learn More...</Link>
              </article>
            })
          }
        </section>
        <button onClick={() => {
            navigate("/")
          }}>
            Go to Home
        </button>  
      </div>
      
    </>

  )
}

export default About