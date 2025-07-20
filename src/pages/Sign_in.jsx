import React, { useEffect, useState } from "react";
import { Link, Links, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Sign_in = () => {
  let navigate = useNavigate();

  let handleSignUp = () => {
    navigate("/signup");
  };

  let [state, setstate] = useState({
    email: "",
    password: "",
  });
  let { email, password } = state;

  let handleInputChange = (e) => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  // console.log(state)

  // calling users data through api
  let [api, setapi] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/users").then((res) => {
  //     setapi(res.data);
  //   });
  // }, []);

  // data to validate to login
  // let hanleclick=(e)=>{
  //   e.preventDefault();
  //   let data =api.find((val)=>{
  //     if(val.email===state.email && val.password===state.password){
  //       return val
  //     }
  //   })
  //   if(data){
  //     navigate('/home')
  //   }else{
  //     alert('wronge cradentail')
  //   }
  // }

  let hanleclick = (e) => {
    e.preventDefault();

    // Get all registered users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find match
    let matchedUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (matchedUser) {
      alert(`Welcome, ${matchedUser.name}!`);
      navigate("/home");
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/30"
      >
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">
          Sign In
        </h2>

        <form className="space-y-6">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              required
              className="peer w-full px-4 pt-6 pb-2 text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-white"
              name="email"
              value={email}
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
              className="peer w-full px-4 pt-6 pb-2 text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-white"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <label className="absolute left-4 top-2 text-white text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 transition-all duration-200">
              Password
            </label>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-white text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            {/* <a href="#" className="hover:underline text-white/80">Forgot Password?</a> */}
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-white text-indigo-600 font-semibold py-2 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            onClick={hanleclick}
          >
            Sign In
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-white mt-6">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="underline text-white"
            onClick={handleSignUp}
          >
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Sign_in;
