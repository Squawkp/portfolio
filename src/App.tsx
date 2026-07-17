import React from 'react'
import { Routes, Route, HashRouter} from "react-router-dom"
import { Homepage } from './pages/Homepage'
import { Projects } from './pages/Projects'
import { Navigate } from 'react-router-dom'
import './App.css';
import { OldHomepageDemo } from './pages/OldHompageDemo'
import { LayoutMain } from './components/LayoutMain'

const App: React.FC = () => {

  return <HashRouter>
    <Routes>
      <Route element={<LayoutMain/>}>
        <Route index element={<Homepage/>} />
        <Route path="apiPractice" element={<Projects/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Route>
      
      <Route path="oldDemo" element={<OldHomepageDemo/>}/>
    </Routes>
  </HashRouter>
}

export default App
