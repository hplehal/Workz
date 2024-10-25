// import { useState } from 'react'
import './App.css'
import JobCard from './components/JobCard'
import Nav from './components/Nav'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <h1>Welcome to Workz!</h1>
      <JobCard />
    </>
  )
}

export default App
