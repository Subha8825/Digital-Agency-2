import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Clients' element={<Clients />} />
          <Route path='/Contact' element={<Contact />} />


        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
