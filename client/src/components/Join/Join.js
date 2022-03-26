import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css';
const Join = () => {
    const [name,setName] = useState('');
    // const [room,setRoom] = useState('');

    return(
         <div className="joinOut">
            <div className='joinIn'>
                <h1 className='heading' >Join Chat</h1>
                <div><input placeholder='Name' className='joinInputs' type='text' onChange={(event)=>setName(event.target.value)} /></div>
                {/* <div><input placeholder='Room' className='joinInputs mt-20' type='text' onChange={(event)=>setRoom(event.target.value)} /></div> */}
                <Link onClick={event=> (!name) ? event.preventDefault() : null} to={`/chat?name=${name}`}>
                    <button className='button mt-20' type='submit'>Login IN</button>
                </Link>
            </div>
         </div>
    )
}

export default Join;