import "./Sidebar.css";
import React from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SearchIcon from "@material-ui/icons/Search";
import CallIcon from "@material-ui/icons/Call";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import ChatIcon from "@material-ui/icons/Chat";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import { Avatar, IconButton } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar src="data:image/jpeg;base64,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" />
        <div className="sidebar-header-right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <CallIcon />
          </IconButton>
          <IconButton>
            <VideoCallIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <ScreenShareIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-search-container">
            <SearchIcon/>
            <input type="text" placeholder="search for chat"/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
