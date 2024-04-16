//Question1->1.Create a React application that has multiple pages represented as components. Implement lazy loading for these components
//  using React's lazy and Suspense features.
//  When a user navigates to a particular page, the component should be loaded lazily, improving the application's initial loading time.

import React from 'react'
import {
    BrowserRouter as Router ,
    Routes,
    Route,
  } from "react-router-dom";
  import Home from './Home'
const LazyAbout=React.lazy(()=>(import('./About')))



const Routing = () => {
  return (

    <Router>
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <ErrorBoundary>
     <Route path='/about' element={<React.Suspense fallback={<div>Loading About Page..</div>}><LazyAbout/></React.Suspense>}></Route>
     </ErrorBoundary>
</Routes>
</Router>
  )
}

export default Routing
