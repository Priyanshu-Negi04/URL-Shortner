import { Routes, Route } from 'react-router-dom';
import UrlShortnerForm from './components/UrlShortnerForm';
import AdminPage from './components/AdminPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 5rem)' }}>
        <Routes>
          <Route path="/" element={<UrlShortnerForm />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
