import React from "react";
import Form from "../../components/shared/Form/Form";


const Login = () => {

  return (
    <>
      {error && <span>{alert(error)}</span>}
    
       
       (
        <div className="row g-0" style={{background: "lightblue"}}>
      
          <div className=" form-container">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
         
        </div>
      )
    </>
  );
};

export default Login;
