import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Journal } from './journal/journal';
import { Leaderboard } from './leaderboard/leaderboard';
import { About } from './about/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  return (
    <BrowserRouter>
    <div className='body bg-dark text-light'>
      <header className='container-fluid'>
        <nav className='navbar fixed-top navbar-dark'>
          <menu className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to=''>
        Home
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink className='nav-link' to='journal'>
        Journal
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink className='nav-link' to='leaderboard'>
        Leaderboard
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink className='nav-link' to='about'>
        About
      </NavLink>
    </li>
          </menu>
        </nav>
      </header>

      <Routes>
  <Route path='/' element={<Home />} exact />
  <Route path='/journal' element={<Journal />} />
  <Route path='/leaderboard' element={<Leaderboard />} />
  <Route path='/about' element={<About />} />
  <Route path='*' element={<NotFound />} />
</Routes>

      <footer className='bg-dark text-white-50'>
        <div className='container-fluid'>
          <span className='text-reset'>Amber</span>
          <a className='text-reset' href='https://github.com/ambjarvi/cs260/blob/main/README.md'>
            GitHub
          </a>
        </div>
      </footer>
    </div>
    </BrowserRouter>
    
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;