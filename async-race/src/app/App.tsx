import './App.scss';
import { Garage } from '../pages/Garage/garage'
import { Winners } from '../pages/Winners/winners'
import {
    HashRouter as BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import React from 'react';

function App() {
  return <BrowserRouter>
      <Routes>
      <Route path='/' element = {<Garage />}/>
      <Route path='/winners' element={<Winners />} />
    </Routes>
  </BrowserRouter>
}

export default App;
