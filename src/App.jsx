import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import CardWeather from './components/CardWeather';
import Header from './components/Header';



function App() {
  return (
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path='/' element={<CardWeather/>}/> 
			</Routes>
		</BrowserRouter> 

  )
}

export default App
