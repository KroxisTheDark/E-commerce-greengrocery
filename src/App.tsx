import { Route, Routes } from 'react-router-dom'
import Home  from './components/HomePage'

import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
    </Routes>
  )
}

export default App
