import React, { useState, useEffect } from 'react';
import API from '../../services/API';
import Header from '../../components/shared/Layout/Header';

 const Fund = () => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [csrfToken, setCsrfToken] = useState('');
  
    useEffect(() => {
      fetchCsrfToken();
    }, []);
  
    const fetchCsrfToken = async () => {
      try {
        const response = await API.get('/csrf-token');
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handlePayment = async () => {
      try {
        const response = await API.post('/admin/donate-money', {
          _csrf: csrfToken, // Sending CSRF token along with payment data
          amount: amount,
          currency: 'USD', // or any other currency
          description: description
        });
        window.location.href = response.data.redirect_url;
      } catch (error) {
        console.error(error);
      }
    };
  
     return (
      <>
      <Header />
         <div className='row' >
          <div className='col-md-7'>
         <img src="./assets/images/img2.jpg" alt="camp image" className='Center' />
         </div>

       <div className='col-md-5 mail'>
      <h1>Donate Money</h1>
        <input type="text" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)} style={{"width":400,"height":60,"margin":20,"textAlign":"center"}} />
        <input type="text" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{"width":400,"height":150,"textAlign":"center"}} />
        <button onClick={handlePayment} style={{"color":"white","backgroundColor":"red","height":50,"width":200,"borderRadius":10, "marginTop":20}}>
        Pay with paypal
      </button>
      </div>

      </div>
      </>
     );
   }


 export default Fund;