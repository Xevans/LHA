import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import GPnews from './routes/gpnews/gpnews.component';
import './App.css';



function App() {
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
