import React from 'react'

const Register = () => {
  return (
    // <div>
    //     <form>
    //         <input type='text' placeholder='Enter name'></input>
    //         <input type='email' placeholder='Enter email'></input>
    //         <input type='password' placeholder='Create Password'></input>
    //         <input type='password' placeholder='Confirm Password'></input>
    //         <button className='btn-b'>Register</button>
    //     </form>
    // </div>


    <div class="flex items-center justify-center min-h-screen bg-gray-100">
  <form class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
    <div class="mb-4">
      <input 
        type="text" 
        placeholder="Enter name" 
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div class="mb-4">
      <input 
        type="email" 
        placeholder="Enter email" 
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div class="mb-4">
      <input 
        type="password" 
        placeholder="Create Password" 
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div class="mb-4">
      <input 
        type="password" 
        placeholder="Confirm Password" 
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <button 
      type="submit" 
      class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700"
    >
      Register
    </button>
  </form>
</div>


  )
}

export default Register