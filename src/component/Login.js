import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();

    useEffect(()=>{
    const auth = localStorage.getItem('user')
    if(auth){
        navigate('/')
    }
    })

    const collectData = async ()=>{
        console.log(email,password);
        let result = await fetch('http://localhost:5000/login', {
            method:"POST",
            body:JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        // console.log(result)
        if(result.name){
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/')
            console.log("Successfully Login")
        }else{
            alert("Please enter correct details");
        }

    }
  return (
    <div className='login'>
        <h1>Login</h1>
        <input className='input-box' type='text' value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input className='input-box' type='password' value={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={collectData} className='appButton' type='button'>Login</button>
    </div>
  )
}

export default Login