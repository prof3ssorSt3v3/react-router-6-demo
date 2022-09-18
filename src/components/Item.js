import { useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';

export default function Item(){
  let location = useLocation();
  // console.log({location});
  const [ocean, setOcean] = useState(null);

  useEffect(()=>{
    setOcean(location.state);
  }, [location]);

  return (
    (ocean) && (
      <>
        <h1>{ocean.name} Ocean</h1>
        <p>{ocean.size} Km<sup>2</sup>.</p>
        <p>{ocean.pct * 100} % of total oceans.</p>
      </>
    )
  );
}