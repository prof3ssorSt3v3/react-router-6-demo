import { useParams } from "react-router-dom";

export default function Person({cast}){
  const {cid} = useParams();
  console.log(cast, cid);

  const castMember = cast.find((item)=>parseInt(item.id) == cid);
  console.log({castMember});
  
  return (
    <section className="sectionB">
      {
      castMember && (<>
        <h1>{castMember.character}</h1>
        <h2>{castMember.actor}</h2> 
      </>)
      }
      <p><a href="/b">Back to List</a></p>
    </section>
  )
}