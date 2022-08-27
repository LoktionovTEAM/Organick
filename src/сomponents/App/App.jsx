//* ============================================ Основной компонент приложения ========================================*\\

//? МОДУЛИ:
import { Routes, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

//? ПОЛЬЗОВАТЕЛЬСКИЕ ХУКИ:
import useCheckWebP from '../../hooks/useCheckWebP'

//? СТИЛИ:
import './app.scss'

//? ДАННЫЕ:
import { routesApp } from '../../routes/routesNavigation'

export default function App() {

	useCheckWebP()
	const location = useLocation()

	return (

		<TransitionGroup component={null}>
			<CSSTransition
				key={location.key}
				classNames='page'
				timeout={300}
				unmountOnExit
				onEnter={() => document.body.classList.add('lock')}
				onExited={() => document.body.classList.remove('lock')}>
				<Routes location={location}>
					{routesApp.map(({ path, Component }) => (
						<Route key={path} exact path={path} element={<Component />}></Route>
					))}
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	)
}
