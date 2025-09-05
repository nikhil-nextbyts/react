import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import Layout from './components/Layout'

function App() {
  return (
    <UserContextProvider>
      <h1>use of context API</h1>
      <Login />
      <Profile />
      <Layout />
    </UserContextProvider>
  )
}

export default App
