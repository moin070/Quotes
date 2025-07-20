import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { helper } from '../context/AppContext'

const AllQuotes = () => {
  let data=useContext(helper)
  // console.log(data)
  let fetchData=data.quotes;
let [state, setstate] = useState([]);

useEffect(()=>{
  if((fetchData && fetchData.length >0)){
    setstate(fetchData)
  }
},[fetchData])

console.log(state); 


let handleDelete=(id)=>{
    let updateddata=state.filter((val)=>val.id!==id);
    setstate(updateddata)
    
}



  return (
     <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">✨ Inspiring Quotes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {state.map((val, i) => (
  <motion.div
    key={i}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white rounded-xl shadow-lg p-6 transition duration-300 hover:shadow-2xl border-l-4 border-purple-400"
  >
    <p className="text-gray-700 text-lg italic mb-4">❝ {val.quote} ❞</p>
    <p className="text-right text-purple-700 font-semibold mb-4">— {val.author}</p>

    <div className="flex justify-end gap-3">
      <button
        className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded-md text-sm"
        onClick={() => handleUpdate(val.id)}
      >
        Update
      </button>
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm"
        onClick={() => handleDelete(val.id)}
      >
        Delete
      </button>
    </div>
  </motion.div>
))}

      </div>
    </div>
  )
}

export default AllQuotes