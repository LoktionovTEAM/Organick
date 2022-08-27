//* =================== Reducers Корзины =============== *//

//? МОДУЛИ
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	itemsInCart: [],
	totalCost: 0,
	totalQuantity: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItemInCart(state, action) {
			const foundItem = state.itemsInCart.find((item) => item.id === action.payload.id)
			if (foundItem) {
				foundItem.quantity++
				foundItem.amount = foundItem.quantity * foundItem.discountCost
			} else {
				state.itemsInCart.push({
					id: action.payload.id,
					name: action.payload.name,
					cost: action.payload.cost,
					discountCost: action.payload.discountCost,
					currency: action.payload.currency,
					imgUrl: action.payload.imgUrl,
					quantity: action.payload.quantity,
					amount: action.payload.amount,
				})
			}
			state.totalCost = state.itemsInCart.reduce(
				(sum, item) => item.discountCost * item.quantity + sum,
				0,
			)
			state.totalQuantity = state.itemsInCart.reduce((sum, item) => item.quantity + sum, 0)
		},
		changeItemInCart(state, action) {
			console.log(action.payload)
		},
		increaseItemToCart(state, action) {
			const foundItem = state.itemsInCart.find((item) => item.id === action.payload.id)
			if (foundItem) {
				foundItem.quantity++
				foundItem.amount = foundItem.quantity * foundItem.discountCost
			}
			state.totalCost = state.itemsInCart.reduce(
				(sum, item) => item.discountCost * item.quantity + sum,
				0,
			)
			state.totalQuantity = state.itemsInCart.reduce((sum, item) => item.quantity + sum, 0)
		},
		decreaseItemToCart(state, action) {
			const foundItem = state.itemsInCart.find((item) => item.id === action.payload.id)
			if (foundItem && foundItem.quantity >= 2) {
				foundItem.quantity--
				foundItem.amount = foundItem.quantity * foundItem.discountCost
			}
			state.totalCost = state.itemsInCart.reduce(
				(sum, item) => item.discountCost * item.quantity + sum,
				0,
			)
			state.totalQuantity = state.itemsInCart.reduce((sum, item) => item.quantity + sum, 0)
		},
		deleteItemFromCart(state, action) {
			state.itemsInCart = state.itemsInCart.filter((item) => item.id !== action.payload)
			state.totalCost = state.itemsInCart.reduce(
				(sum, item) => item.discountCost * item.quantity + sum,
				0,
			)
			state.totalQuantity = state.itemsInCart.reduce((sum, item) => item.quantity + sum, 0)
		},
		clearItemFromCart(state) {
			state.itemsInCart = []
			state.totalCost = 0
			state.totalQuantity = 0
		},
	},
})

const { actions, reducer } = cartSlice

export const {
	setItemInCart,
	changeItemInCart,
	increaseItemToCart,
	decreaseItemToCart,
	deleteItemFromCart,
	clearItemFromCart,
} = actions

export default reducer
