import React from 'react';
import Header from '../Header';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <Header />
      </div>
      <div className="col-span-12 grid grid-cols-12 px-4 py-4 sm:py-8 sm:px-8 gap-8">{children}</div>
    </div>
  );
};

export default Container;