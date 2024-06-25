'use client';

import { useState, useEffect } from 'react';

export function Chip({ name, active, status }: Chip) {
  const [color, setColor] = useState('');
  const colors: { [key: string]: string } = {
    pending: 'text-yellow-500 bg-yellow-100',
    approved: 'text-zinc-800 bg-green-100',
    denied: 'text-red-500 bg-red-100',
  };

  useEffect(() => {
    setColor(colors[status]);
  }, []);

  return (
    <div
      className={`text-xs w-fit py-2 px-3 rounded ${
        !active && 'opacity-20 grayscale'
      } ${color}`}
    >
      <p className="font-black">{name.toLocaleUpperCase()}</p>
    </div>
  );
}

export default Chip;
