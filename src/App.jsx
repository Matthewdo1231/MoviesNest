import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './Home'
import RouteLayout from './RouteLayout';
import NotFound from './NotFound';
import { Navigate } from 'react-router-dom';

const App = () => {
  return (  
        <Routes>
            <Route element={<RouteLayout/>}> 
                <Route index element={<Navigate to="home" replace/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
  )
}

export default App