import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Router from './Router'
import routes from '../kovoRoutes'

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Layout>
        <Router routes={routes} />
      </Layout>
    </BrowserRouter>
  )
}

export default App