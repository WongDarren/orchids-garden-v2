'use client';

import React, { useEffect, useState } from 'react';

function Home() {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/dimsum')
      .then(response => response.json())
      .then(data => {
        setMenuItems(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {menuItems.map(item => (
            <div key={item.id} className="group">
              <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={item.source}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center "
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
