import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import Testform from './components/Testform';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
    const showAlert = (message,type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
    }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been set","success");
      document.title = 'First App - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been set","success");
      document.title = 'First App - Light Mode';
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="First App" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container my-3'>
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<Testform heading = "Enter The String" mode={mode}/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}
Navbar.defaultProps = {
  title : 'Set Title Here',
  aboutText : 'Set About Here'
}
export default App;
