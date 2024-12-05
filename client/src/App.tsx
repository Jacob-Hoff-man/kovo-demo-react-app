import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="/" element={<div>main page</div>} />
              <Route path="/second" element={<div>second page</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}

export default App
