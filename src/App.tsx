import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

import { ApiStateProvider } from 'components/api-state-provider'
import Layout from 'components/layouts/main'
import Chakra from 'components/chakra'

import Routes from 'animated-routes'

export default function App(): JSX.Element {
  const client: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retryDelay: 500,
        staleTime: Infinity
      }
    }
  })

  return (
    <QueryClientProvider client={client}>
      <ApiStateProvider>
        <Chakra>
          <Layout>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </Layout>
        </Chakra>
      </ApiStateProvider>
    </QueryClientProvider>
  )
}
