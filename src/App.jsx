import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/menu/NavBar';
import Produtos from './components/menu/Produtos';
import Contato from './components/menu/Contato';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          {/* As Rotas */}
          <Routes>
            {/* A Rota */}
            <Route path="/" element={<Home />} />
            <Route path='/produtos' element={<Produtos />} />
            <Route path='/contatos' element={<Contato />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
