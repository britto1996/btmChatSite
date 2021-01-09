import './Chatbar.css'
import React from 'react'
import { Avatar , IconButton } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic';
function Chatbar() {
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
                <p className="chatmessage">
                <span className="chatname">
                    btm
                </span>This is a message
                <span className="chattime">
                    {new Date().toUTCString()}
                </span>
                </p>

                 <p className="chatmessage chatreciever">
                <span className="chatname">
                    btm
                </span>This is a message
                <span className="chattime">
                    {new Date().toUTCString()}
                </span>
                </p>

                 <p className="chatmessage">
                <span className="chatname">
                    btm
                </span>This is a message
                <span className="chattime">
                    {new Date().toUTCString()}
                </span>
                </p>
                
            </div>
            <div className="chatfooter">
                <InsertEmoticonIcon/>
                <form>
                <input type="text" placeholder="type a message" />
                <button type="submit">send a message</button>
                </form>

                <MicIcon/>
            </div>
            
        </div>
    )
}

export default Chatbar
