import { useRef, useState, useEffect, useContext } from 'react';
import { TokenContext } from "./UserContext";

import axios from "axios";

import socket from "../socket";

export default function Chat() {
  
  const ref = useRef(useContext(TokenContext))
  
  //const navigate = useNavigate();

  const getChats = async () => {
    const res = await axios.get("/api/users/chatrooms", {
      headers: { 'Authorization': `token ${ref.current.accessToken}` }
    });

    console.log(res);
  }

  useEffect(() => {
    getChats();
  }, [])
  /*const [username, setUsername] = 
    useState(localStorage.getItem('username') || '');  

  const [messageContent, setMessageContent] = useState("");

  const [otherUser, setOtherUser] = useState("");

  const [messages, setMessages] = useState([]);

  const [listMessages, setListMessages] = useState([]);

  useEffect(() => {
    const newList = messages.map((message, index) => 
      <li key={index}>
        <div>
          from: {message.from}
        </div>
        <div>
          {message.content}
        </div>
      </li>
    );

    setListMessages(newList);
  }, [messages])

  useEffect(() => {
    if (!username) {
      return;
    }

    socket.auth = { username };
    socket.connect();
    
    socket.on("users", (users) => {
      users.forEach((user) => {
        if (user.userID !== socket.id) {
          setOtherUser(user.userID); 
        }
      });
    });
  }, [username]);

  useEffect(() => {
    socket.on("private message", (message) => {
      setMessages(prev => [...prev, message]);  
    });
    return () => {
      socket.off("private message");
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.username.value);
    
    if(!e.target.username.value) {
      return;
    }

    localStorage.setItem('username', e.target.username.value);

    setUsername(e.target.username.value);
  }

  const sendMessage = (e) => {
    e.preventDefault();

    if (!messageContent || !otherUser) {
      return;
    }

    socket.emit("private message", {
      content: messageContent,
      to: otherUser
    });
  }

  return (
      <div>
        <h1>User Chat</h1>
        {!username &&
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" />
            <input type="submit" />
          </form>
        }{username &&
          <>
            {otherUser ?
              <span>{username} is chatting with {otherUser}</span>
              :
              <span>{username} is ready to chat</span>
            } {listMessages.length > 0 &&
              <div>
                <ul>{listMessages}</ul>
              </div>
            }
            <form onSubmit={sendMessage}>
              <input type="text" value={messageContent} onChange={e =>
                setMessageContent(e.target.value)} />
              <input type="submit" value="send message"/>
            </form>
          </>
        }
      </div>
  )*/

  return (
    <>
      <div className="chatroom-aside">
        {/*list of chatrooms here*/}
      </div>
    </>
  )
}
