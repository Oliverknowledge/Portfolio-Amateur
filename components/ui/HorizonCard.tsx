import React from 'react';
import { ThreeDCardDemo as CardEffect } from './CardEffect';

const HorizonCard = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full p-3 py-6 md:p-5 lg:p-10">
        <CardEffect />
      </div>
    </div>
  );
};

export default HorizonCard;
  