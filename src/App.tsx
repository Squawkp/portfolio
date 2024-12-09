import { useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Homepage } from './pages/Homepage'
import { NoPage } from './pages/NoPage'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}>
      <Route path="*" element={<NoPage />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
