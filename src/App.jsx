import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

import GlobalStyles from './globalStyles';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<SignupPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
