import React, {useState, useEffect}  from "react";
import axios from "axios";

console.log("api...")
const api = axios.create({
  // localURL: 'http://localhost:8000/',     
  baseURL: 'https://faad01.azurewebsites.net'     
});

const App = () => {
  console.log("app...")
  const [hello, setHello] = useState([]);
  const [formData, setFormData] = useState({
    name: ''
  });
}

const fetchHello = async () => {
  console.log("fetchHello...")
  const response = await api.get('/hello/Birdwatchers');
  setHello(response.data)
  console.log(response.data)
}

useEffect( () => {
  console.log("useEffect...")
  fetchHello();

}, []);

export default App;

