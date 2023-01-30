
import './App.css';
import './Composants/fonts/font.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Pages/News/News';
import Home from './Pages/Home/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/News' element={<News/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;