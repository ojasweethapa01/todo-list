import React, {useState} from "react";
import Listing from "./Components/List.comp.js";
import MockData from "./data.json";



function App() {
   const [data, setData] = useState(MockData);

  const listing = data.map((list, index) => {
    return <Listing list={list} />;
  });

   return <div className= "App">{listing}</div>;
   
}

export default App;
