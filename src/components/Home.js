import { Outlet } from 'react-router-dom';
import './home.css';

export default function Home(){

  return (
    <section className="home">
      <h1>Welcome Home</h1>
      
      <Outlet />

    </section>
  )
}