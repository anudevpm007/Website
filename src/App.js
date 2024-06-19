import React,{ Component } from 'react';
import Home from './Home/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "Website/",
    element: <Home/>,
    // children: [
    //   {
    //     path: "/StartUp/blogs/",
    //     element: <Main_Blog/>,
    //   },
    // ]
    
  },
  
]);


class App extends Component{
  render(){
    return(
      <RouterProvider router={router} />

    );
  }
}



export default App;
