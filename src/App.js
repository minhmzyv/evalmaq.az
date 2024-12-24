import './App.css';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
