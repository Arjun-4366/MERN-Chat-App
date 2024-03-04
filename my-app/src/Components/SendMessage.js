import React from 'react'
import "./MainStyles.css";
function SendMessage() {
    let props2= {message:'Sample message'}
  return (
    <div className='receive-container '>
    <div className="send-message ">
        <div className='receive-text'>
          <p className="chat-lastMessage ">{props2.message}</p>
        </div>
        <p className="chat-timestamp">12:00</p>
      </div>
  </div>
  )
}

export default SendMessage
