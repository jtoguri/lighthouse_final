import { useState, useEffect } from 'react';

import socket from "../socket";

export default function Chat() {
  const [username, setUsername] = 
    useState(localStorage.getItem('username') || '');  

  const [messageContent, setMessageContent] = useState("");

  const [otherUser, setOtherUser] = useState("");

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

    socket.on("private message", ({ content, from }) => {
      console.log(content)
    });
  }, [username]);

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
            }
            <form onSubmit={sendMessage}>
              <input type="text" value={messageContent} onChange={e =>
                setMessageContent(e.target.value)} />
              <input type="submit" value="send message"/>
            </form>
          </>
        }
      </div>
  )
}
