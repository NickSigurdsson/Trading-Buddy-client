import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage';
import CalendarPage from './pages/Calendar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* Homepage */}
        <Route path='/' element={<Homepage/>}></Route>
        {/* Calendar */}
        <Route path='/calendar' element={<CalendarPage/>}></Route>
        {/* Dashboard */}
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
