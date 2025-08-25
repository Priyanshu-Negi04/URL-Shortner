
import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export default function UrlShortnerForm() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");


  const [error, setError] = useState("");  
  const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (shortCode) {
            navigator.clipboard.writeText(shortUrl);  
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShortCode("");
    setError("");

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl: longUrl }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setShortUrl(data.shortUrl);  
      } else {
        setError(data.error || "Something went wrong");
      }

    } catch {
      setError("Server unreachable");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-[2.5rem] shadow-xl p-14 max-w-lg w-full relative formContainer">
        <h1 className="text-5xl font-extrabold text-purple-700 text-center mb-3 tracking-wide drop-shadow">
          URL Shortner
        </h1>
        <div className="font-semibold italic text-green-600 text-center mb-10 text-xl">
          Your links, simplified
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
          <input
            type="url"
            required
            placeholder="Enter your Long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="w-full px-7 py-5 rounded-full bg-gray-200 text-center text-xl mb-2 outline-purple-400 placeholder-gray-500"
          />
          <button
            type="submit"
            className="w-3/5 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold text-2xl transition"
          >
            Shorten
          </button>
        </form>

        {/* Show shortened URL or error after submission */}
        {(shortCode || error) && (
          <div className="mt-12 text-center">
            {error ? (
              <div className="text-red-600 border border-red-400 p-4 rounded-md font-semibold text-lg max-w-md mx-auto">
                Error: {error}
              </div>
            ) : (
              <>
                <span className="text-3xl font-semibold mb-3 block">Your shortened URL :</span>
                <div className="flex justify-center items-center gap-3 mt-2 max-w-md mx-auto">
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow px-6 py-4 bg-gray-200 rounded-md text-xl font-mono underline text-blue-700"
                    title={`http://localhost:5000/api/${shortCode}`}
                  >
                    {shortUrl}
                  </a>
                    <div className="relative">
                        <button
                            onClick={handleCopy}
                            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition"
                            aria-label="Copy shortened URL"
                        >
                            Copy
                        </button>
                        {copied && (
                            <span className="absolute text-green-600 font-semibold" style={{ left: '25px', top: '50px', fontSize: '20px' }}>
                            Copied!
                            </span>
                        )}
                    </div>

                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
