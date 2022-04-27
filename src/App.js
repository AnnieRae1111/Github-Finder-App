import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>

      <main>
        content
      </main>
      
    </div>
  );
}

export default App;
