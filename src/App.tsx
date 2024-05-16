// import Message from "./Message" 
// import ListGroup from "./components/ListGroup"
import Cards from "./components/Cards"
import Test01 from "./components/Test01"

function App() {

  return (
    <>
    <h2>Птицы Казахстана: лучшие фотографии</h2>
    <div>
        <Cards/>       
      </div>
      <div>
        <Test01></Test01>
      </div>
      <p className="read-the-docs">
        <a href="https://kz.birds.watch/">Birds of Kazakhstan</a>
      </p>
      <a href="https://kz.birds.watch/"><img src="/images/birds.kz.logo.jpg" alt="logo"></img></a>  
    </>
  )
}

export default App
