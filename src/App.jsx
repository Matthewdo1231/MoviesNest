import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './Home'
import RouteLayout from './RouteLayout';
import NotFound from './NotFound';

const App = () => {
  return (  
        <Routes>
            <Route element={<RouteLayout/>}> 
                <Route path="*" element={<NotFound/>}/>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
  )
}

export default App