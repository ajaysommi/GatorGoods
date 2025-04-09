import { useState } from 'react'
import '../App.css'

function AccountVerification(){
  const [code, setCode] =useState('')
  const [message, setMessage] =useState('Enter your UFID for Verification')

  const handleSubmit =(e) =>{
    e.preventDefault()
    if(code ==='12345678'){
      setMessage('Verification successful!')
    } 
    else{
      setMessage('Invalid code. Try Again.')
    }
  }

  return(
    <div className="app">
      <h1>GatorGoods Account Verification</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e)=>setCode(e.target.value)}
          placeholder="Enter 8-digit code"
          maxLength="8"
        />
        <button type="submit">Verify</button>
      </form>
      <p className="message">{message}</p>
    </div>
  )
}

export default AccountVerification
