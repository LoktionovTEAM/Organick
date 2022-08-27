//* =================== Reducers Пользователей =============== *//

//? МОДУЛИ:
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

//? ССЫЛКИ:
const USERS_URL = 'http://localhost:3001/users'

const initialState = {
	users: [],
	usersStatusLoading: null,
	usersError: null,
	isUserIdentified: false,
	identifiedUser: [],
}

export const fetchUsers = createAsyncThunk(
	'users/fetchUsers',
	async function(_, {rejectWithValue}) {
		return axios
			.get(USERS_URL)
			.then((response) => {
				const data = response.data
				// console.log(`Данные от ${USERS_URL} успешно получены:`, data)
				return data
			})
			.catch(function (error) {
				console.error(`Ошибка получения данных от ${USERS_URL}:`, error)
				return rejectWithValue(error.message)
			})
	}
)
export const sendNewUser = createAsyncThunk(
	'users/sendNewUser',
	async function (values, { dispatch }) {
		return (
			axios
				.post(USERS_URL, values)
				.then(() => {
					dispatch(setNewUser(values))
					// console.log(`Данные успешно отправлены по адресу: ${USERS_URL}`)
				})
				.catch(function (error) {
					console.error(`Ошибка отправки данных по адресу: ${USERS_URL}:`, error)
				})
		)
	},
)

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setNewUser(state, action) {
			state.users.push(action.payload)
		},
		checkingUserRegistration(state, action) {
			const identifiedUser = state.users.filter(
				(item) => item.email === action.payload.email && item.password === action.payload.password,
			)
			state.isUserIdentified = true
			state.identifiedUser = identifiedUser.map((item) => {
				return {
					name: item.name,
					email: item.email,
					password: item.password
				}
			})
		},
	},
	extraReducers: {
		[fetchUsers.pending]: (state, action) => {
			state.usersStatusLoading = 'loading'
			state.usersError = null
		},
		[fetchUsers.fulfilled]: (state, action) => {
			state.usersStatusLoading = 'resolved'
			state.users = action.payload
		},
		[fetchUsers.rejected]: (state, action) => {
			state.usersStatusLoading = 'rejected'
			state.usersError = action.payload
		},
	},
})

const { actions, reducer } = usersSlice

export const { setNewUser, checkingUserRegistration } = actions

export default reducer;
