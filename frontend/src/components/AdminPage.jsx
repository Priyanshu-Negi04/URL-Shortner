import { useState, useEffect } from 'react';

const AdminPage = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUrls = async () => {
      try {

        const username = import.meta.env.VITE_ADMIN_USER;
        const password = import.meta.env.VITE_ADMIN_PASS;

        const response = await fetch(import.meta.env.VITE_ADMIN_API_URL, {
          headers: {
            'Authorization': 'Basic ' + btoa(username + ':' + password),
          },
        });
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setUrls(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUrls();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Admin - URL List</h1>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Short Code</th>
            <th>Original URL</th>
            <th>Clicks</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {urls.map(url => (
            <tr key={url._id}>
              <td>{url.shortCode}</td>
              <td><a href={url.originalUrl} target="_blank" rel="noopener noreferrer">{url.originalUrl}</a></td>
              <td>{url.clicks}</td>
              <td>{new Date(url.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
