import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* Homepage */}
        <Route path='/' element={<Homepage/>}></Route>
        {/* Calendar */}
        <Route></Route>
        {/* Dashboard */}
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
