import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { getTopics } from '../utils/api';
import '../styles/navbar.css';

function NavBar() {

    const [topics, setTopics] = useState([]);
    useEffect(() => {
      getTopics().then((fetchedTopics) => {
        setTopics(fetchedTopics);
      });
    }, []);
  
    return (
      <div className='wrapper'>
        <header className='primary-header'>
         
          <div className='container'>
          <h1>NC NEWS</h1>
            <div className='nav-wrapper'>
              <input
                type='checkbox'
                id='primary-toggle'
                aria-controls='primary-navigation'
                hidden
              />

              <label htmlFor='primary-toggle' className='primary-toggle'>
                <div className='line' aria-hidden='true'></div>
                <br />
              </label>

              <nav className='primary-navigation' id='primary-navigation'>
                <ul className='nav-list' aria-label='Primary' role='list'>

                  <li>
                    <Link to='/'>Home</Link>
                  </li>

                  <li>
                    <Link to='/topics'>Topics</Link>
                  </li>

                  <li>
                    <Link to='/articles'>Articles</Link>
                  </li>
        
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }

  export default NavBar;