import React from "react";
import { render } from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Body from "./components/Body"
import Test from "./components/Test"
// import App from "./App"

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Body />
      <Test />
    </ChakraProvider>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)