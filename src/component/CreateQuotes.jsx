import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateQuotes = () => {

  let navigate=useNavigate()

let [state,setstate]=useState({
quote:'',
author:''
})

let{quote,author}=state

let hanldechange=(e)=>{
  let {name,value}=e.target;
  setstate({...state,[name]:value})
}


console.log(state)

  let handlePost=()=>{
    // let quotes={
    //   "author":state.author,
    //   "quote":state.quote
    // }
    // console.log()

    // if(!quotes.author=='' && !quotes.quote==''){
    //   axios.post("http://localhost:3000/data",quotes)
    //   navigate('/home')
    // }
    alert("page is not completed yet")
    navigate('/home')
  }

  console.log(quote)


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-xl bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-white/30"
      >
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">Create a New Quote</h2>

        <form className="space-y-6">
          {/* Quote TextArea */}
          <div>
            <label className="block text-white font-medium mb-1">Quote</label>
            <textarea
              required
              rows="4"
              name='quote'
              value={quote}
              onChange={hanldechange}
              placeholder="Enter your quote here..."
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            ></textarea>
          </div>

          {/* Author Name Input */}
          <div>
            <label className="block text-white font-medium mb-1">Author Name</label>
            <input
              type="text"
              required
              name='author'
              value={author}
              onChange={hanldechange}
              placeholder="e.g., William Shakespeare"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="w-full bg-white text-purple-600 font-semibold py-2 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            onClick={handlePost}
          >
            Post Quote
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default CreateQuotes;
