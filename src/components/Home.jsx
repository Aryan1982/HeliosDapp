import React from "react";
import{Link} from 'react-router-dom'
  
const Home = () => {
  return (
    <div>
    <h1>This is Home page</h1>
    <Link to ="/about">about</Link>
    </div>
  );
};
  
export default Home;