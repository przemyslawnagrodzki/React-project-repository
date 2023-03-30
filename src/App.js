import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List'
import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Favorite from './components/Favorite/Favorite'
import { Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch'

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
 </main>
  );
};

export default App