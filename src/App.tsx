import React from 'react'
import { Routes, Route, HashRouter} from "react-router-dom"
import { Homepage } from './pages/Homepage'
import { NoPage } from './pages/NoPage'

const App: React.FC = () => {

  return (
    <HashRouter>
      <Routes>
        <Route index element={<Homepage/>} />
        <Route path="*" element={<NoPage />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
