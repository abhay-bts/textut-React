 
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route,  from }'react-router-dom';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#131e29';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark - mode';
         // setInterval(()=>{
      //   document.title = "Textut Amazing mode";
      // }, 2000
      // );
      // setInterval(()=>{
      //   document.title = " Install Textut Now";
      // }, 1500
      // );
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light - mode';
    }
  };

  return (
    // <Router>
      <>
        <Navbar title="Textut" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
        {/* <switch> */}
          {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={ */}
            <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* </Routes> */}
        {/* </switch> */}

        </div>
      </>
    // </Router>
  );
}

export default App;




