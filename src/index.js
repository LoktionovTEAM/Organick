//* ============================================ Основной JS ========================================*\\

//? МОДУЛИ:
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

//? КОМПОНЕНТЫ:
import App from './сomponents/App' //? приложение

//? XPАНИЛИЩЕ:
import store from './store/store'; //? глобальное хранилище состояний редакта

//? СТИЛИ:
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)
