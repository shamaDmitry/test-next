import React from 'react';

export default function Footer() {
  return (
    <footer className="container">
      <div className="py-8 font-bold space-x-2 text-center">
        <span>{new Date().getFullYear()}</span>

        <span>&copy;Footer</span>
      </div>
    </footer>
  );
}
