import './App.css';
import Nav from './components/Nav/Nav.jsx';
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}
