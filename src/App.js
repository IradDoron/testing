import { NavLink, Routes, Route } from 'react-router-dom';

// import pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import UserTemplate from './pages/About/UserTemplate';

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <h2>I'm above the routes</h2>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="sub1" element={<h3>Sub 1</h3>} />
          <Route path="sub2" element={<h3>Sub 2</h3>} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path=":id/:name" component={<UserTemplate />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <h2>I'm under the routes</h2>
    </>
  );
}

export default App;
