import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Calender from './Pages/Calender/Calender';
import Home from './Pages/Home/Home';
import TodoList from './Pages/TodoList/TodoList';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='todo-list' element={<TodoList />} />
        <Route path='calender' element={<Calender/>} />
        <Route path='about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
