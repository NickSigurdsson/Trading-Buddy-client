import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/HomePage/Homepage';
import CalendarPage from './pages/CalendarPage/Calendar';
import Dashboard from './pages/Dashboard/Dashboard';

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
