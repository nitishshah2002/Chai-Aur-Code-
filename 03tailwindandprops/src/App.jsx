
import './App.css'
import Card from './components/Card'

function App() {
  
  let myObj = {
    username:"Nitish",
    age:21
  }

  return (
    <>

    <h1 className='bg-green-500 text-black rounded-2xl'>Tailwind test</h1>
      <Card channel="chai aur Code" someObj={myObj} btnText="Click Me"/>
    
    
    </>
  )
}

export default App
