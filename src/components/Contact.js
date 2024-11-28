// import React from 'react'

// const Contact = () => {
//   return (
//     <div style={{padding:"0 20px"}}>
//         <h1 className="text-3xl font-bold py-4" id='contact'>Contact:</h1>
//         <form>
//             <div className='contact'>
//                 <div>
//             <input type='text' placeholder='Name'></input>
//             <input type='email' placeholder='Email'></input>
//             <input type='number' placeholder='Phone'></input>
//             </div>
//             <div>
//             <textarea  placeholder='Message' rows={10} cols={70}></textarea>
//             </div>
//             </div>
//             <button className='btn-c'>Send Message</button>
//         </form>
//     </div>
//   )
// }

// export default Contact



import React, { useState } from 'react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setFormSubmitted(true); // Show the thank you message
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <h1 className="text-3xl font-bold py-4" id="contact">Contact:</h1>
      {formSubmitted ? (
        <p className='text-green-500 font-semibold text-center'>Thank you for connecting with us!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="contact">
            <div>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="number" placeholder="Phone" required />
            </div>
            <div>
              <textarea placeholder="Message" rows={10} cols={70} required></textarea>
            </div>
          </div>
          <button type="submit" className="btn-c">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
