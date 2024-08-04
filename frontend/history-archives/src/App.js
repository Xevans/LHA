import { Routes, Route } from 'react-router-dom';
import axios from "axios";
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import GPnews from './routes/gpnews/gpnews.component';

import { useState, useEffect } from 'react';

import './App.css';



function App() {

  const [newspapers, setNewspapers] = useState([]);


  useEffect(() => {
    fetch('http://127.0.0.1:5555/gp_news')
    .then((response) => response.json())
    .then((issues) => setNewspapers(issues));
  }, []);


  console.log(newspapers);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        
        <Route index element={<Home />} />
        <Route path='gpnews' element = {<GPnews />} />
        

      </Route>
    </Routes>
  );
}

//

export default App;
