import React from 'react';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';

const HomePage = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      {/* Left Column */}
      <div className="col-span-12 md:col-span-3">
        <LeftColumn />
      </div>

      {/* Middle Column */}
      <div className="col-span-12 md:col-span-5">
        <MiddleColumn />
      </div>

      {/* Right Column */}
      <div className="col-span-12 md:col-span-4">
        <RightColumn />
      </div>
    </div>
  );
};

export default HomePage;
