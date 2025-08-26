import React from 'react';
import { useState, useEffect } from 'react';

const AdminPage = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const storedCredentials = localStorage.getItem('adminCredentials');
        
        if (!storedCredentials) {
          throw new Error('No credentials found');
        }

        const response = await fetch(import.meta.env.VITE_ADMIN_API_URL, {
          headers: {
            'Authorization': `Basic ${storedCredentials}`,
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

  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin - URL Management</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left">Short Code</th>
              <th className="border border-gray-300 p-3 text-left">Original URL</th>
              <th className="border border-gray-300 p-3 text-center">Clicks</th>
              <th className="border border-gray-300 p-3 text-center">Created At</th>
            </tr>
          </thead>
          <tbody>
            {urls.map(url => (
              <tr key={url._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3 font-mono text-blue-600">{url.shortCode}</td>
                <td className="border border-gray-300 p-3">
                  <a 
                    href={url.originalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all"
                  >
                    {url.originalUrl}
                  </a>
                </td>
                <td className="border border-gray-300 p-3 text-center font-semibold">{url.clicks}</td>
                <td className="border border-gray-300 p-3 text-center text-sm">
                  {new Date(url.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
