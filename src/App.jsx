import { Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

import { Container, CssBaseline } from '@mui/material';
import Header from "./components/Header"
import Home from './components/Home';
import Pricing from './components/Pricing';
import Login from './components/Login';
import Register from './components/Register';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';
import TodoDetails from './components/TodoDetails';

function App() {
    return (
        <AuthContextProvider>
            <CssBaseline />

            <Header />

            <Container component="main" maxWidth="xs">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/todos' element={<TodoList />} />
                    <Route path='/todos/add' element={<CreateTodo />} />
                    <Route path='/todos/:todoId' element={<TodoDetails />} />
                </Routes>
            </Container>

        </AuthContextProvider>
    )
}

export default App
