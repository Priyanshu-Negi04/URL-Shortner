import React, { Routes, Route } from 'react-router-dom';
import UrlShortnerForm from './components/UrlShortnerForm';
import AdminPage from './components/AdminPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UrlShortnerForm />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
