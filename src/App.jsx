import React from 'react';
import { NotificationProvider } from './contexts/NotificationContext';
import NotificationContainer from './components/ui/NotificationContainer';
import Dashboard from './pages/home';

function App() {
  return (
    <NotificationProvider>
      <div className="App">
        <NotificationContainer />
        <Dashboard />
      </div>
    </NotificationProvider>
  );
}

export default App;
