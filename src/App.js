import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/header.component';
import { Home } from './pages/Home/home.component';
import { Popular } from './pages/Popular/popular.component';
import { SingleMovie } from './pages/SingleMovie';
import { UpComing } from './pages/UpComimg';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/popular' element={<Popular />} />
				<Route path='/upcoming' element={<UpComing />} />
				<Route path='/movie/:id' element={<SingleMovie />} />
			</Routes>
		</div>
	);
}

export default App;
