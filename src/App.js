import Navbar from './elements/navbar';
import Home from './elements/home';
import Service from './elements/service';
import About from './elements/about';
import Contact from './elements/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
