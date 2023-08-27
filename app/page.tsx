'use client'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import MainComponent from './components/MainComponent'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://countries.trevorblades.com/graphql' }),
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <MainComponent />
    </ApolloProvider>
  )
}
