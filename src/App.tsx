// import Message from "./Message" 
// import ListGroup from "./components/ListGroup"
import Cards from "./components/Cards"
// import Test01 from "./components/Test01"
import logo from "./assets/kz.birding.day.svg"
import { Routes, Route, Outlet, Link } from "react-router-dom";
import PageTitle from './components/PageTitle';

function App() {

  return (
    <>
      <div>
        <span><h2>Лучшие фотографии сообщества бёрдвотчеров "Птицы Казахстана"</h2></span>
        <p>Выбраны фотографии, набравшие больше всего реакций - "красиво", "интересно" и "важно" в сообществе за текущий и предыдущий месяцы.</p>
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="index.html" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="en/about" element={<En_About />} />
          <Route path="bestbirds" element={<BestBirds />} />
          <Route path="bestbirdsn" element={<BestBirdsN />} />
          <Route path="bestbirdsi" element={<BestBirdsI />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}


function Layout() {
  return (
    <div>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />

      <hr />

      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li >
            <Link to="/bestbirds">Все лучшие красивые фотографии птиц Казахстана </Link>
          </li>
          <li >
            <Link to="/bestbirdsn">Все лучшие интересные фотографии птиц Казахстана</Link>
          </li>
          <li >
            <Link to="/bestbirdsi">Все лучшие важные фотографии птиц Казахстана</Link>
          </li>
          <li>
            <Link to="/about">О сайте</Link>
          </li>
          <li>
            <Link to="/en/about">About</Link>
          </li>
          <li >
            <Link to="/">Начало</Link>
          </li>
        </ul>
      </nav>

      <hr />

    </div>
  );
}

function Home() {
  return (
    <div>
      <h3>Четыре лучшие "красивые":</h3>
      <div>
        <Cards count={4} fileName={"dailybest.json"}/>
      </div>
      <h3>Четыре лучшие "интересные":</h3>
      <div>
        <Cards count={4} fileName={"dailynoteunq.json"}/>
      </div>
      <h3>Четыре лучшие "важные":</h3>
      <div>
        <Cards count={4} fileName={"dailyimpt.json"}/>
      </div>
    </div>
  );
}

function About() {
  return (
    <>
      <PageTitle title='О сайте "Птицы Казахстана - лучшие фотографии"' />
      <div>
        <h2>Об этом сайте </h2>
        <p>На этом сайте вы можете найти лучшие фотографии птиц сообщества "Птицы Казахстана". </p>
        <div className="App">
          <h3>Birds of Kazakhstan - best shots</h3>
          <a href="https://kz.birding.day/"><img src={logo} alt="Birds of Kazakhstan" width="200"></img></a>  
        </div>
      </div>
    </>
  );
}

function En_About() {
  return (
    <>
      <PageTitle title='About "Birds of Kazakhstsn - best pictures"' />
      <div>
        <h2>About this site</h2>
        <p>There is a birdwatching community  <a href="https://kz.birding.day/">"Birds of Kazakhstsn"</a>, where birders share their pictures, videos, lifers, stories, help to identify birds etc. </p>
        <p>Birders can react on other's pictures with "Nice", "Important" and "Interesting" kind of likes.</p>
        <p>This site shows thumbnails of the best shots marked with these three categories of likes:</p>
        <ul>
          <li><a href="/bestbirds">Nice</a> birds of Kazakhstan pictures</li>
          <li><a href="/bestbirdsn">Interesting</a> birds of Kazakhstan pictures</li>
          <li><a href="/bestbirdsi">Important</a> birds of Kazakhstan pictures</li>
        </ul>
        <div className="App">
          <p>All pictures are taken from: </p>
          <h3>Birds of Kazakhstan community:</h3>
          <a href="https://kz.birding.day/"><img src={logo} alt="Birds of Kazakhstan" width="200"></img></a>  
        </div>
        {/* <p>You can check also <a href="https://baqusy.org/">"Birds of Eurasia Best Pictures"</a></p> */}
      </div>
    </>
  );
}


function BestBirds() {
  return (
    <div>
      <h3>Все лучшие фотографии сообщества "Птицы Казахстана", отмеченные как красивые за этот и прошлый месяц:</h3>
      <div>
        <Cards count={28} fileName={"dailybest.json"}/>
      </div>
    </div>
  );
}


function BestBirdsN() {
  return (
    <div>
      <h3>Все лучшие фотографии сообщества "Птицы Казахстана", отмеченные как интересные за этот месяц:</h3>
      <div>
        <Cards count={8} fileName={"dailynote.json"}/>
      </div>
    </div>
  );
}


function BestBirdsI() {
  return (
    <div>
      <h3>Все лучшие фотографии сообщества "Птицы Казахстана", отмеченные как важные за этот месяц:</h3>
      <div>
        <Cards count={8} fileName={"dailyimpt.json"}/>
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
