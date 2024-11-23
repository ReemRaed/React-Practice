import { useEffect, useState } from 'react';
import './App.css';
import Scratch from './components/Scratch';
import Login from './components/Login';
import ToDoContextProvider from './store/to-do-context';

let time;
function App() {

  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    time = setTimeout(() => {
      setShowMain(true);
    }, 2000);
    return () => {
      clearTimeout(time);
    }
  }, []);
  return (
    <>
    <ToDoContextProvider>
      {showMain?<Login/>:<Scratch/>}
      </ToDoContextProvider>
    </>
  );
}

export default App;
