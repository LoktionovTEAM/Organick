//* =================== Store  =============== *//

// ? МОДУЛИ
import { configureStore } from '@reduxjs/toolkit'
import products from './reducers/productsSlice'
import cart from './reducers/cartSlice'
import orders from './reducers/ordersSlice'
import users from './reducers/usersSlice'

export default configureStore({

	reducer: {
		products,
		cart,
		orders,
		users,
	}

})
