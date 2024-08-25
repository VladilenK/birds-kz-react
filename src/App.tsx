// import Message from "./Message" 
// import ListGroup from "./components/ListGroup"
import Cards from "./components/Cards"
// import Test01 from "./components/Test01"
import logo from "./assets/kz.birding.day.svg"
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {

  return (
    <>
      <div>
        <span><h2>Лучшие фотографии птиц Казахстана</h2></span>
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="index.html" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="bestbirds" element={<BestBirds />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}


function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li >
            <Link to="/">Начало</Link>
          </li>
          <li >
            <Link to="/bestbirds">Лучшие фотографии птиц Казахстана</Link>
          </li>
          <li>
            <Link to="/about">О сайте</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <div>
        <Cards/>       
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>О сайте</h2>
      <p>На этом сайте вы можете найти лучшие фотографии птиц сообщества "Птицы Казахстана". </p>
      <div className="App">
        <h3>Birds of Kazakhstan - best shots</h3>
        <a href="https://kz.birding.day/"><img src={logo} alt="Birds of Kazakhstan" width="200"></img></a>  
      </div>
    </div>
  );
}


function BestBirds() {
  return (
    <div>
      <div>
        <Cards/>       
      </div>
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>О, здравствуйте! Сколько лет, сколько зим!</h2>
      <p>
        На самом деле эта страница больше не существует. Пожалуйста, начните с главной страницы.
      </p>
      <p>
        <Link to="/">На главную</Link>
      </p>
    </div>
  );
}

export default App
