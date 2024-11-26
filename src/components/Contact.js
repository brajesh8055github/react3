import React from 'react'

const Contact = () => {
  return (
    <div style={{padding:"0 20px"}}>
        <h1>Contact:</h1>
        <form>
            <div className='contact' id='contact'>
                <div>
            <input type='text' placeholder='Name'></input>
            <input type='email' placeholder='Email'></input>
            <input type='number' placeholder='Phone'></input>
            </div>
            <div>
            <textarea  placeholder='Message' rows={10} cols={70}></textarea>
            </div>
            </div>
            <button className='btn-c'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact