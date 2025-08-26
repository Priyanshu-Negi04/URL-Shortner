import { useAuth } from './AuthContext';
import AdminLogin from './AdminLogin';
import AdminPage from './AdminPage';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <AdminPage /> : <AdminLogin />;
};

export default ProtectedRoute;
