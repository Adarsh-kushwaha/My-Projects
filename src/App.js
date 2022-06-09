import React from 'react'
import Grid from './components/Grid'
import Header from './components/Header'

const App = () => {
  return (
    <div className='overflow-hidden bg-gray-100'>
      <Header />
      <Grid />
    </div>
  )
}

export default App