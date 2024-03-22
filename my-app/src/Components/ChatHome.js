import React from 'react'
import homeLogo from "../images/homeLogo.jpg"
import { useNavigate } from 'react-router-dom'

function ChatHome() {
  const userData = JSON.parse(localStorage.getItem("userDetails"))
  console.log(userData)
  const navigate = useNavigate()
  if(!userData){
    console.log('user not authenticated')
    navigate('/')
  }
  return (
    
    <div className='chat-home'>
      <img src={homeLogo} alt="" />
    </div>
  )
}

export default ChatHome
