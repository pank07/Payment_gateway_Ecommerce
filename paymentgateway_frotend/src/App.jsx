import React,{ useState } from 'react'
import StripeCheckout from './StripeCheckout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <StripeCheckout/>
      </>
  )
}

export default App
