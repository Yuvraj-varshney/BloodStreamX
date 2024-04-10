
import Header from '../../components/shared/Layout/Header';
import React, { useState } from 'react';
import API from '../../services/API';



const SendMail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendEmails = () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    API.post('/admin/get-users', { message })
      .then(response => {
        setLoading(false);
        setSuccess(true);
      })
      .catch(error => {
        setLoading(false);
        setError(error.message || 'An error occurred while sending emails');
      });
  };

  return (
    <>
    <Header />
       <div className='row' >
        <div className='col-md-7'>
       <img src="./assets/images/img1.jpg" alt="camp image" className='Center' />
       </div>
       <div className='col-md-5 mail'>
      <h1>Send Invitation</h1>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)}  style={{"height":300,"width":400,"margin":20}}/>
      {loading && <p>Sending emails...</p>}
      {error && <p>Error: {error}</p>}
      {success && <p>Emails sent successfully!</p>}
      <button onClick={handleSendEmails} disabled={loading} style={{"color":"white","backgroundColor":"red","height":50,"width":100,"borderRadius":10}}>
        Send 
      </button>
       </div>
      </div>
    </>
  );
};

export default SendMail;
