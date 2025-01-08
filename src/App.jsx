import { useState } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import Error from './pages/Error'
import './App.css'
import { Outlet } from 'react-router-dom'

function App({ error }) {
  const [count, setCount] = useState(0)

  return (
    <NextUIProvider>
      <Outlet />
      {error && (
        <Error />
      )}
    </NextUIProvider>
  )
}

export default App
