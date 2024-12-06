import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './global/Layout'
import Router from './global/Router'
import routes from '@constants/kovoRoutes'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const App = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Router routes={routes} />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
