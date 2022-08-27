//* =================== Reducers Продукции  =============== *//

//? МОДУЛИ:
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//? ССЫЛКИ:
const PRODUCTS_URL = 'http://localhost:3001/products'

const initialState = {
	products: [],
	productsLoading: null,
	productsError: null,
	productsSearchValue: '',
	filterNameProducts: [],
}

export const fetchProducts = createAsyncThunk(
	'products/fetchProducts',
	async function (_, { rejectWithValue }) {
	return axios
		.get(PRODUCTS_URL)
		.then((response) => {
			const data = response.data
			// console.log(`Данные от ${PRODUCTS_URL} успешно получены:`, data)
			return data
		})
		.catch(function (error) {
			console.error(`Ошибка получения данных от ${PRODUCTS_URL}:`, error)
			return rejectWithValue(error.message)
		})
	}
)

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setSearchValue(state, action) {
			state.productsSearchValue = action.payload
		},
		autocompleteSearch(state, action) {
			state.productsSearchValue = action.payload
		},
		searchProductName(state, action) {
			state.filterNameProducts = state.products.filter((item) => {
				return item.name.toLowerCase().includes(state.productsSearchValue.toLowerCase())
			})
		},
		clearSearchValue(state, action) {
			state.productsSearchValue = ''
			state.filterNameProducts = state.products
		},
	},
	extraReducers: {
		[fetchProducts.pending]: (state) => {
			state.productsLoading = 'loading'
			state.productsError = null
		},
		[fetchProducts.fulfilled]: (state, action) => {
			state.productsLoading = 'resolved'
			state.products = action.payload
			state.filterNameProducts = action.payload
		},
		[fetchProducts.rejected]: (state, action) => {
			state.productsLoading = 'rejected'
			state.productsError = action.payload
		},
	},
})

const { actions, reducer } = productsSlice

export const { setSearchValue, clearSearchValue, autocompleteSearch, searchProductName } = actions

export default reducer
