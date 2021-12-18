import React from 'react';
import FooterCarrera from './FooterCarrera';
import HeaderCarrera from './HeaderCarrera';

const LayoutCarrera = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <HeaderCarrera />
      <main className="text-gray-900">{children}</main>
      <FooterCarrera />
    </>
  );
};

export default LayoutCarrera;
