import {useState, useEffect}  from "react";
import axios from 'axios'

interface Props {
  message: string;
}

console.log("api...")
// const api = axios.create({
//   // localURL: 'http://localhost:8000/',     
//   // baseURL: 'https://afadpt01.azurewebsites.net',
//   // headers: {"Access-Control-Allow-Origin": "*"}
// });


const Test01 = () => {
  console.log("app...")
  const [hello, setHello] = useState<Props>({message: 'wait...'});

  const fetchHello = async () => {
    console.log("fetchHello...")
    // const response = await axios.get('https://afadpt01.azurewebsites.net/hello/Birdwatchers');
    const response = await axios.get('https://afadpt01.azurewebsites.net/birdskz');
    setHello(response.data)
    console.log(response.data)
  }
  
  useEffect( () => {
    console.log("useEffect...")
    fetchHello();
  }, []);

  return (
    <div>  {hello.message}</div>
  )
}

export default Test01