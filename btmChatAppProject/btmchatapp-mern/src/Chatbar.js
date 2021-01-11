import './Chatbar.css'
import React from 'react'
import { useState } from 'react';
import { Avatar , IconButton } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';
function Chatbar({messages}) {

    const [input , setInput] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault()

        await axios.post("/api/messages",{
            message:input,
            name:"DEMO",
            timestamp:"Just Now",
            recieved:false
        })

    }
    return (
        <div className="chatbar">
            <div className="chatbarHeader">
                <Avatar/>
                <div className="friend">
                    <h1>Courses</h1>
                    <p>Last seen at..</p>
                </div>
                <div className="chatHeaderIcons">
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        <IconButton>
                            <AttachFileIcon/>
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>   
                            
                        
                        
                    </div>
            
            </div>
            <div className="chatbody">
            {
                messages.map((messages)=>(
                    <p className = {`chatmessage ${messages.recieved && "chatreciever"}`}>
                <span className="chatname">
                    {messages.name}
                </span>{messages.message}
                <span className="chattime">
                    {messages.timestamp}
                </span>
                </p>
                ))
            }
                

                 
                
                
            </div>
            <div className="chatfooter">
                <InsertEmoticonIcon/>
                <form>
                <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="type a message" />
                <button onClick={sendMessage} type="submit">send a message</button>
                </form>

                <MicIcon/>
            </div>
            
        </div>
    )
}

export default Chatbar
