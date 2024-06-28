import { useState } from 'preact/hooks'
import Nav from './Project/Nav'
import Banner from './Project/Banner'
import Plans from './Project/Plans'
// import Footer from './Project/Footer'
import NewsLetter from './Project/NewsLetter'
import Experts from './Project/Experts'
import Footer from './Project/Footer'

// import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Banner/>
      <Experts/>
      <NewsLetter/>
      <Plans/>
      <Plans/>
      <Footer/>
    </>
  )
}
