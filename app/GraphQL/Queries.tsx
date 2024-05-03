import { gql } from '@apollo/client'

export const MainQuery = gql`
  query getCountries($code: ID!) {
    country(code: $code) {
      code
      capital
      currency
      continent {
        name
      }
      name
      emoji
      native
      phone
      languages {
        name
      }
    }
  }
`

export const getAllCountries = gql`
  query getAll {
    countries {
      name
      code
      emoji
    }
  }
`
