import React from 'react'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import google from '../images/google.png'
const Top = () => {
  return (
    <div className='top' style={{padding:"5px 20px "}}>
        <div>
          <p>E Shop@info.com</p>
        </div>
        <div className="top-right">
          <>
            <a href='/login'><button className='btn-top'>Login</button></a>
            <a href='/register'><button className='btn-top'>Register</button></a>
            </>
            <div class="icons">
            <i><img src={facebook} alt="" style={{width: "20px"}}/></i>
            <i><img src={twitter} alt="" style={{width: "20px"}}/></i>
            <i><img src={google} alt="" style={{width: "20px"}}/></i>
            
    </div>
        </div>
    </div>
  )
}

export default Top