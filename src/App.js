import './App.css';
import Home from './Home';
import {BrowserRouter, Navigate, link, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar darkmode={mode} toggleMode={toggleMode} /> */}
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
