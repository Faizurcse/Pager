import React from "react";
import { useState } from "react";
import axios from "axios";
function Form() {
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  const [nameValid, setNameValid] = useState(false);

  const handleNmaeChange = (e) => {
    setName(e.target.value);
    setNameValid(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setNameValid(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Name = name.trim();
    const Message = message.trim();

    if (Name === "" || Message === "") {
      alert("Please fill the required feilds");
      setNameValid(true);
      return;
    }

    if (Name.length < 3) {
      alert("Name must be at least 3 character");
      return;
    }

    if (Message < 10) {
      alert("Meassage must be at least 10 Character");
      return;
    }

   

    const response = await axios.post(
      "https://aj-pager-5be32-default-rtdb.asia-southeast1.firebasedatabase.app/faiz.json",
      {
        name: name,
        message: message,
      }
    );

    setName('')
    setMessage('')
    console.log(response)

  };

  return (
    <div className="form-container">
      <form>
        <div className="form-header">Send message to University</div>
        <div className="form-input">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
          <input
            type="text"
            placeholder="   Md Rehan "
            onChange={handleNmaeChange}
            value={name}
          />
          {nameValid && <p style={{ color: "red" }}>Please enter your name!</p>}
        </div>
        <div className="form-input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="   send your message! "
            onChange={handleMessageChange}
            value={message}
          />
        </div>
        <div className="form-btn">
          <button onClick={handleSubmit}>Send</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
