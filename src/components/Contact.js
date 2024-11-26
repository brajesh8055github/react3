import React from 'react'

const Contact = () => {
  return (
    <div style={{padding:"0 20px"}}>
        <h1 className="text-3xl font-bold py-4" id='contact'>Contact:</h1>
        <form>
            <div className='contact'>
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