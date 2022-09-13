import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Blogs } from './Blogs';

const Blog = () => {
    const {title} = useParams();
    const [descData, setDescData] = useState();

    useEffect(() => {
        const BlogData = Blogs.filter((blog) => blog.title === title);
        setDescData(BlogData[0].Desc);
    }, [])


  return (
    <div>
        <h1>{title} page </h1>
        <p>{descData}</p>
    </div>
  )
}

export default Blog