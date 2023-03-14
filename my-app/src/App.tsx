import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Home from './views/Home';
import Page404 from './views/Page404';
import BreedPage from './views/BreedPage';

function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <Routes>
      <Route path="/" element={<Main inputValue={inputValue} setInputValue={setInputValue} />}>
          <Route index element={<Home inputValue={inputValue} />} />
          <Route path='/breed/:breed' element={<BreedPage />}/>
      </Route>
      <Route path='*' element={<Page404 />} /> 
    </Routes>
  );
}

export default App;
