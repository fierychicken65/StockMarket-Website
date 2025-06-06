import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="flex flex-col justify-center items-center text-white p-4 md:p-8 space-y-4 md:space-y-6 min-h-screen">
            <h1 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Login</h1>
            <h3 className="text-base md:text-lg mb-4 md:mb-6 text-center">Enter your credentials to access your account</h3>
            
            <div className="w-full md:w-4/5 max-w-md px-4 md:px-0">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter your password"
                />
              </div>
              
              <div className="flex items-center mb-6">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-4 h-4 rounded bg-gray-700 border-gray-600 focus:ring-blue-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
              </div>
              
              <button 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
              >
                Login
              </button>
              
              <div className="text-center mt-4">
                <p className="text-sm">
                  Not a member? <a href="#" className="text-purple-400 hover:text-purple-300">Create an account</a>
                </p>
              </div>
            </div>
        </div>
        <div className="hidden md:block h-screen">
            <img src="src/assets/360_F_198247162_JwrVkhqowZb4NJC24156nV6QYRhsV8Qf.jpg" alt="login image" className="h-full w-full object-cover"/>
        </div>
      </div>
    </div>
  );
}

export default Login;