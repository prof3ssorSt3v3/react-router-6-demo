import './b.css';
import {Link} from 'react-router-dom';

export default function B({cast}){

  return (
    <section className="sectionB">
      <h1>B Cuz you're Awesome</h1>
      <ul>
        {
        cast.map((person)=>(
          <>
          <li key={person.id}><a href={`/b/${person.id}`}>{person.character}</a></li>
          <li key={person.character}><Link to={`/b/${person.id}`}>{person.character}</Link> </li>
          </>
        ))
        }
      </ul>
    </section>
  )
}