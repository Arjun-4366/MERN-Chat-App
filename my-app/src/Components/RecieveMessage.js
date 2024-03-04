import React from 'react'
import "./MainStyles.css";

function RecieveMessage() {
    let props1  = {message:'Sample message'}
  return (
    <div className='receive-container'>
      <div className="receive-message">
          <p className="chat-icon">P</p>
          <div className='receive-text'>
            <p className="chat-lastMessage ">{props1.message}</p>
          </div>
          <p className="chat-timestamp">12:00</p>
        </div>
    </div>
  )
}

export default RecieveMessage
