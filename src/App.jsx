// import { useState } from 'react'
// import Home from './component/Home'
// import Sign_in from './pages/Sign_in'
// import { Router, RouterProvider, } from 'react-router-dom'
// import { routes } from './layout/AppRoutes'
// import AppContext from './context/AppContext'


// function App() {

//   return (
//     <AppContext>
//       <RouterProvider router={routes}></RouterProvider>
//     </AppContext>
//   )
// }
// export default App


import AppContext from './context/AppContext'
import { RouterProvider } from 'react-router-dom'
import { routes } from './layout/AppRoutes'

function App() {
  return (
    <AppContext>
      <RouterProvider router={routes} />
    </AppContext>
  );
}

export default App;

