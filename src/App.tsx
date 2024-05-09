import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Footer from './components/Footer/Footer'
// import Login from './pages/Login/Login'


function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <ReactQueryDevtools />
    </div>
  )
}

export default App
