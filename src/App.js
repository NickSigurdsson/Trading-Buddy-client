import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage';
import Calendar from './pages/Calendar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* Homepage */}
        <Route path='/' element={<Homepage/>}></Route>
        {/* Calendar */}
        <Route path='/' element={<Calendar/>}></Route>
        {/* Dashboard */}
        <Route path='/' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
