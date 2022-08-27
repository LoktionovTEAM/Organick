//* =================== Reducers Заказа товара =============== *//

//? МОДУЛИ:
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//? ССЫЛКИ:
const ORDERS_URL = 'http://localhost:3001/orders'

const initialState = {
	orders: [],
	ordersStatusLoading: null,
}

export const sendNewOrder = createAsyncThunk(
	'order/sendNewOrder',
	async function (order, { dispatch }) {
		return axios
			.post(ORDERS_URL, order)
			.then(() => {
				dispatch(setNewOrder(order))
				// console.log(`Данные успешно отправлены по адресу: ${ORDERS_URL}`)
			})
			.catch(function (error) {
				console.error(`Ошибка отправки данных по адресу: ${ORDERS_URL}:`, error)
			})
	},
)

const ordersSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		setNewOrder(state, action) {
			state.orders.push(action.payload)
			state.ordersStatusLoading = 'resolved'
		},
	},
})

const { actions, reducer } = ordersSlice

export const { setNewOrder } = actions

export default reducer
