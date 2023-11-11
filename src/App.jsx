import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import CardWeather from './components/CardWeather';
import Header from './components/Header';
import TodayCard from './components/TodayCard';



function App() {
  return (
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path='/' element={<TodayCard/>}/> 
			</Routes>
		</BrowserRouter> 

  )
}

export default App
