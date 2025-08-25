import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-900 p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-lg font-semibold hover:text-blue-400">
        URL Shortener
      </Link>
      <div className="space-x-8">
        <Link
          to="/"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/admin"
          className="text-gray-300 hover:text-white transition duration-300"
        >
          Admin
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
