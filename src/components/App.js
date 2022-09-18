import './app.css';
import Nav from './Nav.js';
import Home from './Home.js';
import A from './A.js';
import B from './B.js';
import C from './C.js';
import Item from './Item.js';
import Person from './Person.js';
import NoMatch from './NoMatch.js';
import {Routes, Route} from 'react-router-dom';
import {useState} from 'react';

export default function App() {
  const [cast, setCast] = useState([
    {id:12, character:'Sheldon', actor:'Jim Parsons'},
    {id:34, character:'Leonard', actor:'Johnny Galecki'},
    {id:56, character:'Penny', actor:'Kaley Cuoco'},
    {id:78, character:'Amy', actor:'Miyam Bialik'},
    {id:90, character:'Bernadette', actor:'Melissa Rauch'},
  ]);

  return (
    <div className='app'>
      <header>
        <h1>React Router</h1>
      </header>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="a" element={<A />} />
            <Route path="b" element={<B cast={cast} />} />
            <Route path="b/:cid" element={<Person cast={cast} />} />
            <Route path="c" element={<C />}>
              <Route path=":id" element={<Item/>} />
            </Route>
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes> 
      </main>
    </div>
  );
}

