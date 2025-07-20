// import axios from "axios";
// import React, { createContext, useContext, useEffect, useState } from "react";

// export let helper = createContext();

// const AppContext = ({ children }) => {
//   let [api, setapi] = useState([]);
//   let { quotes, total, limit } = api;

//   useEffect(() => {
//     axios.get("https://dummyjson.com/quotes").then((res) => {
//       setapi(res.data);
//     });
//   }, []);


//   console.log(quotes);
//   return <helper.Provider value={{ quotes }}>{children}</helper.Provider>;
// };

// export default AppContext;


import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const helper = createContext();

const AppContext = ({ children }) => {
  const [api, setapi] = useState({});
  const quotes = api.quotes || [];

  useEffect(() => {
    axios
      .get("https://dummyjson.com/quotes")
      .then((res) => {
        setapi(res.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  console.log("Quotes from API:", quotes);

  return <helper.Provider value={{ quotes }}>{children}</helper.Provider>;
};

export default AppContext;
