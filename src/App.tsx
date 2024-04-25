import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './pages/Header/Header'
import Main from './pages/Main/Main'
import Login from './pages/Login/Login'


function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Main></Main>
    </div>

  )
}

export default App
{/* <Routes>
        <Route path='/login' element={<Login />}></Route>
      </Routes> */}