import React from 'react'
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {

    //searchParams
    const [searchParams, setSearchParams] = useSearchParams();


    //use State 
    const [name, setName] = useState("");
    const [age, setAge] = useState();



    //submit event handeler
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({name: name, number: age});
    }


    //use params
    // const {userid} = useParams();

  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => {
                setName(e.target.value);
            }} />
            <input type="number" value={age} onChange={(e) => {
                setAge(e.target.value);
            }} />

            <button type='submit'>find user</button>
        </form>
    </div>
  )
}

export default User