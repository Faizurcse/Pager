import React from 'react'
import Form from './Components/Form'
import MessageList from './Components/MessageList'
import  './App.css'
function App() {
  return (
    <div className='app'>
      <div className="container">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
         <Form/>
      </div>
         <MessageList/>
    </div>
  )
}

export default App
