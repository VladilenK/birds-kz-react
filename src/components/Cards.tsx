// import { MouseEvent, useState } from "react"
import {useState, useEffect}  from "react";
import axios from 'axios'
import Card from "./Card";

interface Bird {
    taxon_name: string;
    taxon_link: string;
    location: string;
    pic_url: string;
    author: string;
}
interface Birds extends Array<Bird>{}
  
console.log("api...")
const api = axios.create({
// localURL: 'http://localhost:8000/',     
baseURL: 'https://afadpt01.azurewebsites.net',
// headers: {"Access-Control-Allow-Origin": "*"}
});
  
  
function ListGroup() {
    const [thebest, setTheBest] = useState<Birds>([]);
    const fetchTheBest = async () => {
        console.log("fetchTheBest...")
        const response = await api.get('/thebest');
        setTheBest(response.data)
        console.log(response.data)
      }
      
      useEffect( () => {
        console.log("useEffect...")
        fetchTheBest();
      }, []);
        
    
    return (
        <>
            <h2>Птицы Казахстана</h2>
            <h3>Некоторые лучшие снимки...</h3>
            {thebest.length === 0 && <p>fetching the best pictures...</p>}
            <div className="row row-cols-3 g-3">
                {thebest.map((item) =>
                    (<Card url={item.pic_url} title={item.taxon_name} location={item.location} link={item.taxon_link} author={item.author} >
                    </Card>)
                )}
            </div>
        </>
    )
}

export default ListGroup;