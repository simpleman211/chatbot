import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Header  from './compoments/Header.js'
import { Outlet } from 'react-router-dom';
import Context from './context/index.js';
import Footer from './compoments/Footer.js';
function App() {
  return (
    <>
      <Context.Provider>
      <ToastContainer/>
        <main className='min-h-[calc(100vh-125px)]'>
          <Outlet/>
        </main>
      </Context.Provider>
    </>
  );
}

export default App;
