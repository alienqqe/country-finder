'use client'
import { FaHistory, FaTimes } from 'react-icons/fa'

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
    __typename: string
    name: string
    code: string
    emoji: string
  }
  const trie = new TrieSearch('name')

  const [historyArr, setHistoryArr] = useState(
    localStorage.getItem('history') && typeof window !== undefined
      ? localStorage.getItem('history')!.split(' ')
      : []
  )
  const [screenWidth, setWidth] = useState(
    typeof window !== undefined ? window.innerWidth : 0
  )
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [countryData, setCountryData] = useState<any[]>([])
  const [searchValues, setSearchValues] = useState<any[]>([])

  // Get viewport width
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // /Get viewport width

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
      trie.addAll(
        countries?.data?.countries?.map((item: countryObject) => item)
      )
      setSearchValues(trie.search(inputValue))
    }
  }, [countries, inputValue])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    searchValues[0] &&
    countries?.data?.countries.filter(
      (item: countryObject) => item?.code === inputValue
    ).length === 0
      ? dispatch(handleFormSubmit(searchValues[0].code))
      : dispatch(handleFormSubmit(inputValue)) && typeof window !== undefined
      ? localStorage.getItem('history')
      : ''

    setHistoryArr([...historyArr, inputValue])
    if (typeof window !== undefined) {
      localStorage.setItem('history', historyArr.join(' '))
    }
  }

  const onDelete = (index: any) => {
    setHistoryArr(historyArr.filter((item, id) => id !== index))
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem('history', historyArr.join(' '))
    }
  }, [historyArr])

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
          <div className='d-flex '>
            <div className='d-flex flex-column align-items-center justify-content-center'>
              <div className='input-group  flex-row dropdown'>
                <button
                  className={
                    screenWidth <= 576
                      ? 'btn btn-secondary btn-sm dropdown-toggle input-group-text'
                      : 'btn btn-secondary btn dropdown-toggle input-group-text'
                  }
                  id='basic-addon1'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <FaHistory />
                </button>

                <ul className={historyArr[0] ? 'dropdown-menu' : 'd-none'}>
                  {historyArr[0]
                    ? historyArr.map((item, index) => (
                        <li
                          key={index}
                          className='d-flex align-items-center justify-content-between'
                        >
                          <a
                            className='dropdown-item'
                            onClick={() => setInputValue(item)}
                            href='#'
                          >
                            {item}
                          </a>
                          <a onClick={() => onDelete(index)}>
                            <FaTimes />
                          </a>
                        </li>
                      ))
                    : ''}
                </ul>
                <form onSubmit={handleSubmit} role='search'>
                  <input
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className='search-input form-control me-2'
                    type='search'
                    placeholder='Enter country name'
                    aria-label='Search'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </form>
              </div>

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
            <form onSubmit={handleSubmit} role='search'>
              <div>
                <button
                  className='btn btn-outline-success'
                  onSubmit={handleSubmit}
                  type='submit'
                >
                  Search
                </button>
              </div>
            </form>
          </div>
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
