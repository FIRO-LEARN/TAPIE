import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import FirstPage from './pages/first'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import CreatePage from './pages/create'
import PostDetailPage from './pages/postDetail'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path='home' element={<Home />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
                <Route path="home/create" element={<CreatePage />} />
                <Route path="home/:id" element={<PostDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
