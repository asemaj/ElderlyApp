import React from 'react'

function SignUp() {
  return (
    <div className="flex flex-col xl:py-20 items-center gap-8 p-8 bg-green-90 border-green-900 border rounded-lg">
      <h2 className="bold-24 text-white">Sign Up</h2>
      <form className="flex flex-col gap-6">
        <label className="bold-16 text-white" htmlFor="name">Name</label>
        <input type="text" id="name" className="p-2 border-green-900 border rounded-lg" />
        <label className="bold-16 text-white" htmlFor="email">Email</label>
        <input type="email" id="email" className="p-2 border-green-900 border rounded-lg" />
        <label className="bold-16 text-white" htmlFor="password">Password</label>
        <input type="password" id="password" className="p-2 border-green-900 border rounded-lg" />
        <button type="submit" className="bg-green-500 p-2 rounded-lg text-white">Sign Up</button>
      </form>
      <div className='xl:py-10'></div>
    </div>
    
  )
}

export default SignUp
