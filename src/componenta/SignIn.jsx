import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './App.css'

export default function SingIn(props) {
const [name , setName]=useState('')

const addName=()=>{
  if (name !== ''){
    props.addUser(name)
    nav('Choice')
  }else{
    alert('must have a valid name')
  }
}

  const nav =useNavigate();

  return (
    <div className='design' id='SingIn'>
      SING IN
      <br />
      <br />
      <input onChange={(e)=>{setName(e.target.value)}} className='inpt' type="text" placeholder='Enter your name'/><br />
      <button className='btn' onClick={ addName} >ENTER</button>
    </div>
  )
}
