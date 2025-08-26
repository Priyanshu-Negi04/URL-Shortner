import { Routes, Route } from 'react-router-dom';
import UrlShortnerForm from './components/UrlShortnerForm';
import Navbar from './components/Navbar';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 5rem)' }}>
          <Routes>
            <Route path="/" element={<UrlShortnerForm />} />
            <Route path="/admin" element={<ProtectedRoute />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
