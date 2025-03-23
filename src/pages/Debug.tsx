import React from 'react';

const Debug = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Debug Page</h1>
      <p>If you can see this, basic rendering is working.</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Environment Info:</h2>
        <pre className="mt-2 p-4 bg-gray-100 rounded">
          {JSON.stringify({
            nodeEnv: import.meta.env.MODE,
            baseUrl: import.meta.env.BASE_URL,
            // Add other relevant environment variables
          }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Debug;