import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Weather from './pages/weather';



function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Weather/>}/> 
			</Routes>
		</BrowserRouter> 
  )
}

export default App
