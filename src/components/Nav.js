import './nav.css';
import {NavLink} from 'react-router-dom';

export default function Nav(){
  let activeClassName = 'activeLink';

  return (
    <nav>
      <NavLink to="a" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>A</NavLink>
      <NavLink to="b" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>B</NavLink>
      <NavLink to="c" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>C</NavLink>
    </nav>
  )
}