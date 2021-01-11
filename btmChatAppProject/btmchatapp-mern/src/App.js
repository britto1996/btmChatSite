
import { useEffect,useState } from 'react';
import './App.css';
import Chatbar from './Chatbar';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  
  const [messages,setMessages] = useState([])

  useEffect(()=>{
    axios.get('/messages/sync')
      .then((response)=>{
        console.log(response)
        setMessages(response.data)
      })
  },[])


  useEffect(()=>{
     let pusher = new Pusher('5415468845a9fe175b94', {
      cluster: 'ap2'
    })
    let channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      console.log(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
    });

    return ()=>{
      channel.unbind_all()
      channel.unsubscribe()
    }

  },[messages])

  console.log(messages)

  return (
    <div className="app">
    <div className="app-body">
      <Sidebar/>
      <Chatbar messages={messages}/>
    </div>
     
     
    </div>
  );
}

export default App;
