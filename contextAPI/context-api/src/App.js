import './App.css';
import Users from './component/Users';
import UserContextProvider from './store/users-context';

function App() {

 
  return (
    <UserContextProvider>
    <div className="App">
      <Users/>
    </div>
    </UserContextProvider>
  );
}

export default App;
