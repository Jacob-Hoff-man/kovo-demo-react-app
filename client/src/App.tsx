import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<div>main page</div>} />
          <Route path="/second" element={<div>second page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
