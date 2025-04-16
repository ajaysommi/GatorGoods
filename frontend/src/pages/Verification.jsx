import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function AccountVerification(){
  const [code, setCode] =useState('');
  const [message, setMessage] =useState('Enter your UFID for Verification');
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(code ==='12345678'){
      setMessage('Verification successful! Redirecting to listings...')
      //part that actually goes to the next page if successful
      navigate('/listings');
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
