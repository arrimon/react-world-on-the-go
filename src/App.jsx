import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'


const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())
  // .then(data => console.log(data))
function App() {

  return (
    <div>
      <h1>React World Wide ...</h1>
      <Suspense fallback={<p>Nadir Vai on the Go....</p>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense> 
        
    </div>
  )
}

export default App
