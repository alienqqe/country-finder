'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { MainQuery } from '../GraphQL/Queries'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { handleFormSubmit } from '@/redux/features/country-slice'

const MainComponent = () => {
  const [inputValue, setInputValue] = useState('')
  const [countryData, setCountryData] = useState<any[]>([])

  const countryCode = useAppSelector((state) => state.countryReducer.value.code)

  const gqlVariables = {
    variables: {
      code: countryCode,
    },
  }

  const { data, error } = useQuery(MainQuery, gqlVariables)

  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(handleFormSubmit(inputValue))
  }

  useEffect(() => {
    if (data) {
      setCountryData([data.country])
      console.log(countryData)
    }
  }, [data])

  const fetchData = countryData.map((item) => item?.languages)
  const languages = fetchData[0]?.map((item: any) => item)

  return (
    <>
      <nav className='navbar'>
        <div className='container-fluid d-flex align-items-center justify-content-center'>
          <form className='d-flex' role='search' onSubmit={handleSubmit}>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Enter country code'
              aria-label='Search'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>

      {countryData[0]
        ? countryData?.map((item) => (
            <div className='country text-light' key={item?.code}>
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
