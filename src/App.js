import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    
    </BrowserRouter>
    
     
  );
}

export default App;
