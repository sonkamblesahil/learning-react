
import {createBrowserRouter as Router, RouterProvider} from 'react-router-dom'  
import HomePage from './components/HomePage'
import About from './components/About'
import Dashboard from './components/dashboard'
import Navbar from './components/Navbar'
import Paramscomp from './components/Paramscomp'
import Courses from './components/Courses'
import Mock from './components/Mock'
import Reports from './components/Reports'
import NotFound from './components/NotFound'

function App() {
 
  const router  =  Router([
    {
      path: '/',
      element:<div><Navbar/> <HomePage/></div>
    },
     {
      path: '/about',
      element:<div><Navbar/>  <About/></div>
    },
     {
      path: '/dashboard',
      element:<div><Navbar/> <Dashboard/></div>,
      children:[
        {
        path:'courses',
        element:<Courses/>
        },
        {
        path:'mock-tests',
        element:<Mock/>
       },
       {
        path:'reports',
        element:<Reports/>
       },
       {
        path:'*',
        element:<NotFound/>
       }
      ]
    },
    {
      path: '/student/:id',
      element:<div><Navbar/> <Paramscomp/></div>
    }
  ])

  return (
    
      <div>
        <RouterProvider router={router} />
      </div>
    
  )
}

export default App
