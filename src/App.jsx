import './App.css'
import Portfolio from './component/UserPortfolio'
import Button from './component/Button'

function App() {
 

  return (
    <>
     {/*<h1>Hello World</h1>
     <p>I am Sandra Opare-Twum,This is my first React Application.</p>*/}
     <Portfolio/>
     <div className="centered-container">
      <Button label="Login" />
      <Button label="Signin" />
    </div>
    </>
  )
}

export default App
