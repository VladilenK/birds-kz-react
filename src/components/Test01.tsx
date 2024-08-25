import {useState, useEffect}  from "react";
import axios from 'axios'

interface Props {
  message: string;
}

console.log("Test01 api...")
// const api = axios.create({
//   // localURL: 'http://localhost:8000/',     
//   // baseURL: 'https://afadpt01.azurewebsites.net',
//   // headers: {"Access-Control-Allow-Origin": "*"}
// });


const Test01 = () => {
  console.log("Test01...")
  const [hello, setHello] = useState<Props>({message: 'wait...'});

  const fetchHello = async () => {
    console.log("Test01 fetchHello...")
    // const response = await axios.get('https://afadpt01.azurewebsites.net/hello/Birdwatchers');
    const response = await axios.get('https://birdskz.azurewebsites.net/birdskz');
    setHello(response.data)
    console.log(response.data)
  }

  useEffect( () => {
    console.log("Test01 useEffect...")
    fetchHello();
  }, []);

  return (
    <>
    <div>  {hello.message}</div>
    </>
  )
}

export default Test01