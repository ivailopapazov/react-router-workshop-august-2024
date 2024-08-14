import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header"
import Home from './components/Home';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </>
    )
}

export default App
