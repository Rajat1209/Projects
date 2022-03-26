import React, {useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages';

import Input from '../Input/Input';

import './Chat.css';

let socket;


const Chat = ({location}) => {
    const [name,setName] = useState('');
    // const [room,setRoom] = useState('');
    const ENDPOINT='localhost:5000';
    const[message,setMessage]=useState([]);
    const[messages,setMessages]=useState([]);

    useEffect(() => {

        const {name}=queryString.parse(location.search);

        socket=io(ENDPOINT);

        setName(name);
        // setRoom(room);
        socket.emit('join', {name}, () => {
            
          });
    },[ENDPOINT,location.search]);

    useEffect(() => {
      socket.on('message', (message) => {
        setMessages([...messages,message]);
      })
      // socket.on("roomData", ({ users }) => {
      //   setUsers(users);
      // });
    }, [messages]);

    const sendMessage = (event) => {

      event.preventDefault();

      if(message)
      {
        socket.emit('sendMessage',message, () => setMessage(''));
      }
    }

    console.log(message,messages);

    return(
        <div className='Outer'>
          <div className='container'>
          <InfoBar  />
          <Messages messages={messages} name={name} />

          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

          </div>
        </div>
    )
}

export default Chat;