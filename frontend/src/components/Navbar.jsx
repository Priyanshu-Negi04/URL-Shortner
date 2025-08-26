import { useAuth } from './AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('adminCredentials');
    logout();
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-md flex items-center h-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-4xl font-semibold hover:text-blue-400">
          URL Shortener
        </Link>
        <div className="space-x-8 flex items-center">
          <Link to="/" className="text-gray-300 hover:text-white text-2xl transition duration-300">Home</Link>
          {!isAuthenticated ? (
            <Link to="/admin" className="text-gray-300 hover:text-white text-2xl transition duration-300">Admin</Link>
          ) : (
            <button 
              onClick={handleLogout} 
              className="text-gray-300 hover:text-white text-2xl transition duration-300 bg-transparent border-none cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
