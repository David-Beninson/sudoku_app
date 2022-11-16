import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"

export default function Choice(props) {
  return (
    <div id="ChoiceDifficulty"> 
    <h1>Hello: {props.name}</h1>
    <h4> Please select a level</h4>
   <Link to={'/Easy'}> <button className="submit">Easy Level</button></Link>
   <Link to={'/Meidum'}> <button className="submit">Medium Level</button></Link>
   <Link to={'/Hard'}> <button className="submit">Hard Level</button></Link>
    </div>
  )
}
