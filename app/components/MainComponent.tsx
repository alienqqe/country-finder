'use client'
import React, { useLayoutEffect } from 'react'
import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { getAllCountries, MainQuery } from '../GraphQL/Queries'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import TrieSearch from 'trie-search'
import { handleFormSubmit } from '@/redux/features/country-slice'


const MainComponent = () => {
  interface countryObject {
    __typename: string;
    name: string;
    code: string;
    emoji: string;
  }
  const trie = new TrieSearch('name')

  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [countryData, setCountryData] = useState<any[]>([])
  const [searchValues, setSearchValues] = useState<any[]>([])

  const countryCode = useAppSelector((state) => state.countryReducer.value.code)

  const gqlVariables = {
    variables: {
      code: countryCode,
    },
  }

  

  const { data, error } = useQuery(MainQuery, gqlVariables)
  const countries = useQuery(getAllCountries)
   const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
    if (countries?.data?.countries?.map((item: countryObject) => item)) {
      trie.addAll(countries?.data?.countries?.map((item: countryObject) => item))
      setSearchValues(trie.search(inputValue))
      }
  }, [countries, inputValue])

  
  const handleSubmit = (e: any) => {
    e.preventDefault()
       searchValues[0] && countries?.data?.countries.filter((item: countryObject) => item?.code === inputValue).length === 0 ? dispatch(handleFormSubmit(searchValues[0].code))  : dispatch(handleFormSubmit(inputValue))
  }

  useEffect(() => {
    if (data) {
      setCountryData([data.country])
    }
  }, [data])

  const fetchData = countryData.map((item) => item?.languages)
  const languages = fetchData[0]?.map((item: any) => item)

  return (
    <>
      <nav className='navbar'>
        <div className='container-fluid d-flex align-items-center justify-content-center position-relative'>
          <form className='' role='search' onSubmit={handleSubmit}>
            <div className='d-flex '>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <input
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className='form-control me-2'
                  type='search'
                  placeholder='Enter country name'
                  aria-label='Search'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div
                  className='overlay w-100 me-2 text-white flex-column '
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {searchValues[0] && (isFocused || isHovered)
                    ? searchValues.map((item: countryObject) => (
                        <div key={item.name} className=' mt-1 d-inline'>
                          <a
                            className='ms-2 fs-5 text-white'
                            onClick={() => setInputValue(item.code)}
                          >
                            {item.emoji} {item.code}
                          </a>
                        </div>
                      ))
                    : ''}
                </div>
              </div>
              <div>
                <button className='btn btn-outline-success' type='submit'>
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>

      {countryData[0]
        ? countryData?.map((item) => (
            <div
              className='country text-light position-absolute'
              key={item?.code}
            >
              <div className='mt-5 me-5 d-flex align-items-center justify-content-center flex-column'>
                <span className='me-3'>
                  <h1 className='py-4'>
                    {item?.name} {item?.emoji}
                  </h1>
                </span>
                <span className='me-5'>
                  <h3 className=''>{item?.continent.name}</h3>
                </span>
              </div>
              <div className=' ms-3 mt-5'>
                <h1>Overview:</h1>
                <div>
                  <ul>
                    <li className='py-2'>
                      <h5>Capital: {item?.capital}</h5>
                    </li>
                    <li className='py-2'>
                      <h5>Currency: {item?.currency}</h5>
                    </li>
                    <li className='py-2'>
                      <h5>
                        Languages:{' '}
                        {languages?.map((item: any) => (
                          <p className='d-inline px-1 '>{item?.name}</p>
                        ))}{' '}
                      </h5>
                    </li>
                    <li className='py-2'>
                      <h5>Phone Number: +{item?.phone}</h5>
                    </li>
                    <li className='py-2'>
                      <h5>Native naming: {item?.native}</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))
        : ''}
    </>
  )
}

export default MainComponent
