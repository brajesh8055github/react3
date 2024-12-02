import React from 'react'

const Login = () => {
  return (
    // <div>
    //     <form>
    //         <input type='email' placeholder='Enter email'></input>
    //         <input type='password' placeholder='Enter password'></input>
    //         <button className='btn-b'>Login</button>
    //     </form>
    // </div>

    <div class="flex items-center justify-center min-h-screen bg-gray-100">
  <form class="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
    <div class="mb-4">
      <input 
        type="email" 
        placeholder="Enter email" 
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
    <div class="mb-4">
      <input 
        type="password" 
        placeholder="Enter password" 
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
    <button 
      type="submit" 
      class="w-full bg-yellow-400 text-white py-2 px-4 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600"
    >
      Login
    </button>
  </form>
</div>

  )
}

export default Login