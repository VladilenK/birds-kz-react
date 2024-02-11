import React, {useState, useEffect}  from "react";
import { Image, Text, Heading, Link, Flex, Divider } from "@chakra-ui/react";
import axios from "axios";

console.log("api...")
const api = axios.create({
  // localURL: 'http://localhost:8000/',     
  baseURL: 'https://faad01.azurewebsites.net'     
});

const Test = () => {
  console.log("app...")
  const [hello, setHello] = useState([]);
  const [formData, setFormData] = useState({
    name: 'plshldr'
  });

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
  

  return (
    <div>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      paddingY="1rem"
      paddingX="1rem"
      bg="#faf9ed"
      color="white"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)" // Add a subtle box shadow
    >
      <Flex align="center" mr={5}>
        <Heading as="h3" size="lg" fontWeight="bold" color={"#2b4444"}>Hello {hello.name}</Heading>
      </Flex>
    </Flex>
    </div>
  );
};


export default Test;