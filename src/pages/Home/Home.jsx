import { NavLink, Routes, Route, Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <nav>
        <NavLink to="/sub1">Sub1</NavLink>
        <NavLink to="/sub2">Sub2</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Home;
