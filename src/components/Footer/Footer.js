import React from 'react';

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-center flex-col absolute bottom-0 bg-primary py-3">
      <div className="flex justify-center flex-col text-center text-white">
        <div className="font-medium">
          <span className="font-semibold">FlyKet </span> is a E-Flight Company{' '}
        </div>
        <span className="font-medium">
          copyright © 2022, made with ❤️ in Indonesia
        </span>
      </div>
    </div>
  );
}
