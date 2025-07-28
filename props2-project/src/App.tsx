import React from 'react'
import { Listing } from './Listing/Listing'
import data from './Listing/data.json'
import './App.css'

function App() {
  return (
    <>
    <Listing items={data} />
    </>
  )
}

export default App
