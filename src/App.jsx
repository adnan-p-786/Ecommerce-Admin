
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  

  return (
    <>
    <main className='relative w-full'>
    <Navbar/>
    <Sidebar/>
    <Outlet/>
    </main>
    </>
  )
}

export default App
