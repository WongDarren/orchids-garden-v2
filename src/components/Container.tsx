import React from 'react';

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>;
}

export default Container;
