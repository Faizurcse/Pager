import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function MessageList() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios.get(
        "https://aj-pager-5be32-default-rtdb.asia-southeast1.firebasedatabase.app/faiz.json"
      )
      .then((response) => {
        let messageList = [];

        for (let index in response.data) {
          messageList.push(response.data[index]);
        }

        console.log('messageList : ' ,messageList)
        
        messageList.reverse();
        const newList = messageList.slice(0, 5);
        setMessage(newList)
        console.log(message)
        console.log('newList',newList);
      });
  }, [message]);

 
return(
    <div className="message-container">
        {message.length > 0 && message.map((item,i)=>{
            return(
                <div className="message-card" key={i}>
                    <div className="user-name">{item.name}</div>
                    <div className="user-message">{item.message}</div>
                </div>
            )
        })}
    </div>
)

}

export default MessageList;

