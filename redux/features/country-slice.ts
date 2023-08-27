import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  value: CountryState
}

type CountryState = {
  code: string
  countryData: any[]
}

const initialState = {
  value: {
    code: '',
    countryData: [],
  } as CountryState,
} as InitialState

export const country = createSlice({
  name: 'country',
  initialState: initialState,
  reducers: {
    handleFormSubmit: (state, action: PayloadAction<string>) => {
      state.value.code = action.payload
    },
  },
})

export const { handleFormSubmit } = country.actions
export default country.reducer
