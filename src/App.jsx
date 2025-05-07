import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Lessons from './pages/Lessons';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lessons" element={<Lessons />} />
      </Routes>
    </>
  );
}

export default App;
