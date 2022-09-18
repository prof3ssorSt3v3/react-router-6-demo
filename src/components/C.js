import './c.css';
import {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const data = [
  {id:'pacific', name: 'Pacific', size: 161760000, pct: 0.447 },
  {id:'atlantic', name: 'Atlantic', size: 85133000, pct: 0.235 },
  {id:'indian', name: 'Indian', size: 70560000, pct: 0.195 },
  {id:'artic', name: 'Arctic', size: 15558000, pct: 0.043 },
  {id:'southern', name: 'Southern', size: 21960000, pct: 0.061 },
];

export default function C(){
  const [oceans, setOceans] = useState([]);
  const navigate = useNavigate(); //for programmatic navigation to details

  useEffect(()=>{
    setOceans(data);
  },[]);

  function pickOcean(_ocean){
    // console.log({_ocean});
    navigate(`/c/${_ocean.id}`, {state:_ocean});
    //pass selected ocean object through location state
    //to be read through useLocation()
  }
  
  return (
    <section className="sectionC">
      <div>
        <h1>C I told you so.</h1>
        {oceans.map((_ocean) => (
          <p key={_ocean.id} onClick={(ev)=>{
            pickOcean(_ocean);
          }}> {_ocean.name} </p>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  )
}