import './App.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Layouts
import Main from './layouts/Main';
//screens
import Erorr from './screens/Erorr';
import Dashboard from './screens/Dashboard';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main />,
      errorElement:<Erorr />,
      children:[
        {index:true,
        //path:'/',
        element:<Dashboard />,
        errorElement:<Erorr />

        },
      ],
    }
  ])
  return (
  <div className="App">
    <RouterProvider router={router} />
  </div>
  );
}

export default App
