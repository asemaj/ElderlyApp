// pages/login.js
// import React, { useState } from 'react';
// import { useClient } from '@refinedev/nextjs-router'; // Check if this import is correct
'use client'
import React from 'react';
import { useState } from "react";
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(`Logging in with ${email} and ${password}`);
  };

  return (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
      <h1 className="bold-24 mb-6">Login</h1>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 border border-gray-300 rounded-md" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-6">
          <label className="block mb-2" htmlFor="password">Password</label>
          <input className="w-full p-2 border border-gray-300 rounded-md" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className="w-full p-3 bg-green-500 text-white rounded-md" type="submit">Submit</button>
      </form>
    </div>
  );
}
export default LoginPage;


