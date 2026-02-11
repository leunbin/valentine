import React from 'react';
import Heart from './Heart';

export default function FloatingHearts() {
  const hearts = Array.from({ length: 10 });

  return (
    <>
      {hearts.map((_, index) => (
        <Heart key={index} delay={index * 400} />
      ))}
    </>
  );
}
