import Bird from "./Bird";
import {useState, useEffect}  from "react";

interface Birds extends Array<Bird>{}

type CardsProps = {
  count: number,
  fileName: string
}
// console.log("Cards body...")

const Cards = ({count, fileName}: CardsProps) => {
  console.log("Cards func...")
  console.log("Props: count=" + count + ", fileName=" + fileName)
  const [theBestBirds, setTheBest] = useState<Birds>([]);

  const getData=()=>{
    fetch('images/' + fileName)
      .then(results => {
        console.log("results:");
        console.log(results);
        return results.json();
      })
      .then(function(myJson) {
        console.log("myJson:");
        console.log(myJson);
        setTheBest(myJson.bestBirds.slice(0, count));
        console.log(theBestBirds);

      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      {theBestBirds.length === 0 && <p>fetching the best pictures...</p>}
      {/* <div className="row row-cols-4 g-4"> */}
      <div className="row">
          {theBestBirds.map((item) =>
              (
                  // <Card bird={item}  >
                  // </Card>
                <div className="col-md-3" key={item.picturekey}>
                <div className='thumbnail'>
                  <a href={item.pic_page_url}>
                    <img className='card-img-top' src={
                        "/images/dailybest/" + item.pic_url.split("/")[6]
                      } 
                      alt={
                        "Вид птицы:" + item.taxon_name + ", сфотографировал:" + item.author + ", место съемки:" + item.location + ", дата: " + item.dateShoot
                      }></img>
                  </a>
                  <div className='card-body'>
                        <h5 className='card-title'><a href={item.taxon_link}>{item.taxon_name}</a></h5>                 
                        <p className='card-text'>{item.location} <br/> Автор снимка: <a href={item.author_url}>{item.author}</a></p>
                    </div>
                    <br/>
                  </div>
              </div>
              )
          )}
      </div>
    </>
  )
}

export default Cards