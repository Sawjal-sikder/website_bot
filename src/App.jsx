import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './contexts/NotificationContext';
import NotificationContainer from './components/ui/NotificationContainer';
import Dashboard from './pages/home';
import Service from './pages/Service';
import Test from './pages/Test';

function App() {
  return (
    <NotificationProvider>
      <Router>
        <div className="App">
          <NotificationContainer />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/support" element={<Service />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </Router>
    </NotificationProvider>
  );
}

export default App;
