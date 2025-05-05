import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Routes로 변경
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SignupPage from './pages/SignupPage';
import './styles/Global.css';  // 전역 스타일

function App() {
  return (
    <Router>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />  {/* element 속성 사용 */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
