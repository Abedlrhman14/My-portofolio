import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-3 bg-black text-secondary">
      © {new Date().getFullYear()} عبدالرحمن عزت. جميع الحقوق محفوظة.
    </footer>
  );
};

export default Footer;