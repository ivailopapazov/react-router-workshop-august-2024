import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header"
import Home from './components/Home';
import Pricing from './components/Pricing';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pricing' element={<Pricing />} />
            </Routes>
        </>
    )
}

export default App
