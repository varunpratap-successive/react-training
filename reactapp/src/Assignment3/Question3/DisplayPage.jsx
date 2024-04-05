import React from 'react'
import { Link } from "react-router-dom";
function DisplayPage() {
  return (
    <>
    <div>This is DisplayPage</div>
    <Link to="/home">Home</Link>
    <br/>
     <Link to="/about">About</Link>
     </>
  )
}

export default DisplayPage