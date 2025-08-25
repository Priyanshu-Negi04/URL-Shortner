import React, { Routes, Route } from 'react-router-dom';
import UrlShortnerForm from './components/UrlShortnerForm';
import AdminPage from './components/AdminPage'; // Adjust the path if needed

function App() {
  return (
    <Routes>
      <Route path="/" element={<UrlShortnerForm />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
