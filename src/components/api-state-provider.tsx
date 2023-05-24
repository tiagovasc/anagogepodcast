import { createContext, useContext } from 'react'
import { useQuery } from 'react-query'

export const ApiStateContext = createContext<any | undefined>(undefined)

export interface ApiStateProviderProps {
  children: React.ReactNode
}

export function ApiStateProvider({
  children
}: ApiStateProviderProps): JSX.Element {
  const {
    data: mainReq,
    isLoading: mainLoading,
    isError: mainError
  } = useQuery('main-req', () =>
    fetch('https://coffee-dojo-api.onrender.com/api/ig/main').then(res =>
      res.json()
    )
  )
  const {
    data: branchesReq,
    isLoading: branchesLoading,
    isError: branchesError
  } = useQuery('branches-req', () =>
    fetch('https://coffee-dojo-api.onrender.com/api/ig/branches').then(res =>
      res.json()
    )
  )

  const { recentPosts = [] } = mainReq || {}
  const branchesData = shuffle(branchesReq || [])

  const ensurePostcount = [
    ...recentPosts.slice(0, 12),
    ...Array(12 - recentPosts.slice(0, 12).length).fill(1)
  ]
  const mainIgFeed: any = []
  for (let i = 0; i < ensurePostcount.length; i++) {
    mainIgFeed.push(ensurePostcount[i])
    if ((i + 1) % 3 === 0) mainIgFeed.push(0)
  }

  const value = {
    mainIgFeed,
    branchesData,
    isLoading: mainLoading || branchesLoading,
    isError: mainError || branchesError
  }

  return (
    <ApiStateContext.Provider value={value}>
      {children}
    </ApiStateContext.Provider>
  )
}

export function useApiContext() {
  const context = useContext(ApiStateContext)
  if (!context)
    throw new Error(
      'useApiContext cannot be used outside of a ApiStateProvider'
    )
  return context
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}
