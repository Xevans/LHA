import './App.css';
import {Routes, Route} from 'react-router-dom'
import Upload from './Routes/upload/upload.route';

function App() {
  return (
    <Routes>
      <Route index path='/' element={<Upload/>}>

      </Route>
    </Routes>
  );
}

export default App;
