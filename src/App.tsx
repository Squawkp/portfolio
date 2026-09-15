import React from 'react'
import { Routes, Route, HashRouter} from "react-router-dom"
import { Homepage } from './pages/Homepage'
import { Projects } from './pages/Projects'
import { Navigate } from 'react-router-dom'
import './App.css';
import { OldHomepageDemo } from './pages/OldHompageDemo'
import { LayoutMain } from './components/LayoutMain'
import { AboutMe } from './pages/AboutMe'

const App: React.FC = () => {

  return <HashRouter>
    <Routes>
      <Route element={<LayoutMain/>}>
        <Route index element={<Homepage/>} />
        <Route path="projects" element={<Projects/>}/>
        <Route path="about-me" element={<AboutMe/>}/>
        {/* <Route path="*" element={<Navigate to="/" replace/>}/> */}
        {/* Add a 404 page not found? */}
      </Route>
      
      <Route path="old-demo" element={<OldHomepageDemo/>}/>
    </Routes>
  </HashRouter>
}

export default App
