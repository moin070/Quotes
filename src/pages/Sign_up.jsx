import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Sign_up = () => {

  let navigate=useNavigate()


let handlesignin=()=>{
  navigate('/home')
}

  let [state, setstate]=useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
  })

  let {name,email,password,confirmPassword}=state;
  

  let handleInputChange=(e)=>{
    let{name,value}=e.target;
    setstate({...state,[name]:value})
  }

  let [api,setapi]=useState({})
// console.log(state)

  // let handleSignUp=(e)=>{
  //   e.preventDefault()

  //   if(state.name.length==0){
  //     alert('enter name')
  //   }else if(!email.endsWith('@gmail.com')){
  //     alert('Email must end with @gmail.com');
  //   }else if(state.password!==state.confirmPassword){
  //     alert('password should be same')
  //   }else{
  //     navigate('/')
  //   }

  //   try{
  //     let data={
  //       "username":state.name,
  //       "email":state.email,
  //       "password":state.password,
  //     }
  //     axios.post("http://localhost:3000/users",data)
  //   }catch{
  //     console.log('data is not posted')
  //   }
  // }

  let handleSignUp = (e) => {
  e.preventDefault();

  if (state.name.length === 0) {
    alert('Enter name');
    return;
  } else if (!email.endsWith('@gmail.com')) {
    alert('Email must end with @gmail.com');
    return;
  } else if (password !== confirmPassword) {
    alert('Passwords should match');
    return;
  }

  // Get existing users from localStorage or empty array
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  const userExists = users.some((u) => u.email === email);
  if (userExists) {
    alert("Email already registered");
    return;
  }

  // Add new user
  users.push({
    name,
    email,
    password
  });

  // Save updated users back to localStorage
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful!");

  navigate('/'); // Redirect to sign-in
};


// send data to json file



// let data=axios.post('http://localhost:3000/users',)


  return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/30"
      >
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">Create Account</h2>

        <form className="space-y-6">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              required
              name='name'
              value={name}
              className="peer w-full px-4 pt-6 pb-2 text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-white"
              onChange={handleInputChange}
            />
            <label className="absolute left-4 top-2 text-white text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 transition-all duration-200">
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name='email'
              value={email}
              required
              className="peer w-full px-4 pt-6 pb-2 text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-white"
              onChange={handleInputChange}
            />
            <label className="absolute left-4 top-2 text-white text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 transition-all duration-200">
              Email Address
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              required
              name='password'
              value={password}
              className="peer w-full px-4 pt-6 pb-2 text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-white"
              onChange={handleInputChange}
            />
            <label className="absolute left-4 top-2 text-white text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 transition-all duration-200">
              Password
            </label>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type="password"
              required
              name='confirmPassword'
              value={confirmPassword}
              className="peer w-full px-4 pt-6 pb-2 text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-white"
              onChange={handleInputChange}
            />
            <label className="absolute left-4 top-2 text-white text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 transition-all duration-200">
              Confirm Password
            </label>
          </div>

          {/* Terms & Conditions */}
          <div className="text-white text-sm flex items-center gap-2">
            <input type="checkbox"
            required 
            className="accent-white" />
            <span>
              I agree to the <a href="#" className="underline">terms and conditions</a>
            </span>
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="w-full bg-white text-purple-600 font-semibold py-2 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            onClick={handleSignUp}
          >
            Sign Up
          </motion.button>
        </form>

        
        <Link to={'/'} className="text-center text-sm text-white mt-6 m-20">
          Already have an account? Sign In
        </Link>
        
      </motion.div>
    </div>
  )
}

export default Sign_up