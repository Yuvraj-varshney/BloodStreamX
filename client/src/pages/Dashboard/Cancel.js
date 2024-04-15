import React from 'react';
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <>

    <div style={{margin:"auto",float:"none",marginBottom:10}} >
    <div className="card m-2 p-1"
    style={{margin:"auto",  width: "28rem", backgroundColor: "red" }}
          >
            <div className="card-body">
              <h1 className="card-title bg-light text-dark text-center mb-3">
            
              </h1>
              <p className="card-text">
              Payment Cancelled
              </p>
              <p className="card-text">
              <Link to="/" style={{color:"white"}}> Go Back To Home !</Link>
              </p>
            </div>

          </div>
          </div>
    </>
  )
}

export default Cancel;