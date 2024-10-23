import './App.css';
import Nav from './Component/Nav';
import TextForm from './Component/TextForm';
import About from './Component/About';
import React, { useState } from 'react';
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Routes, // Changed from Switch to Routes
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <Router>
        <Nav title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes> {/* Changed from Switch to Routes */}
            <Route exact path="/about" element={<About mode={mode} />} /> {/* Updated for version 6 */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading=" Try TesxtUtiles - Word counter, Character counter, Remove extra spaces" mode={mode} />} /> {/* Updated for version 6 */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;