import React from "react";
import Form from "../../components/shared/Form/Form";


const Register = () => {

  return (
    <>
  
        <div className="row g-0"  style={{background: "lightblue"}}>
         
          <div className=" form-container">
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>

    
        </div>
    
    </>
  );
};

export default Register;
