import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import GPnews from './routes/gpnews/gpnews.component';
import GPCivic from './routes/gpcivic/gpcivic.component';

import { useState, useEffect } from 'react';

import './App.css';
import GPMagazine from './routes/gpmagazine/gpmagazine.component';
import GPHeritage from './routes/gpheritage/gpheritage.component';
import GPreview from './routes/gpreview/gpreview.component';



function App() {

  

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        
        <Route index element={<Home />} />
        <Route path='gpnews' element={<GPnews />} />
        <Route path='gpmagazine' element={<GPMagazine />} />
        <Route path='gpcivic' element={<GPCivic />} />
        <Route path='gpheritage' element={<GPHeritage />} />
        <Route path='gpreview' element={<GPreview />} />

      </Route>
    </Routes>
  );
}

//

export default App;
