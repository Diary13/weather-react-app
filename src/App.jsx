import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import CardWeather from './components/CardWeather';
import Header from './components/Header';
// import TodayCard from './components/TodayCard';
import SearchLocation from './components/searchLocation';



function App() {
  return (
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path='/' element={<SearchLocation/>}/> 
			</Routes>
		</BrowserRouter> 

  )
}

export default App
