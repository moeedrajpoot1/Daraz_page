
import { useState } from 'react';
import './App.css';
import Page from './component/Page';
import { product } from './component/Product';
import {Routes,Route} from "react-router-dom"
import Navbar from './component/Navbar';


function App() {
let [dataapi, dataA]=useState(product)

  return (
    <div className="App">
    <Navbar/>
  <Page pro={product} />


  
    </div>
  );
}

export default App;
