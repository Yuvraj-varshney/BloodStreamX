import React from 'react';
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <>

    <div className='Card'>
    <div className="card m-2 p-1 Card-item"
    style={{margin:"auto",  width: "28rem", backgroundColor: "green" }}
          >
            <div className="card-body">
              <h1 className="card-title bg-light text-dark text-center mb-3">
            
              </h1>
              <p className="card-text">
              Payment Successfully done
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

export default Success;