import React from 'react';
import './App.css';
import CreateUser from './components/CreateUser';
import { UserProvider } from './context/GlobalState';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <div className="home">
          <CreateUser />
          <AppRouter />
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
