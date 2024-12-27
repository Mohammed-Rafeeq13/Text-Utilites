import './App.css'
import Navbar from './components/Navbar'
import TestForm from './components/TestForm'

// let name = "World"
function App() {

  return (
    <>
    {/* <h1>Hello {name}</h1> */}
    {/* <Navbar Title="Home!@" Text="About FiNeX IT Solutions" />This is the props in ReactJS */}
    <Navbar/>
    <div className="container my-3">
      <TestForm heading="Give Your Feedback" textarea="Textarea Feedback" />
    </div>
    </>
  )
}

export default App
