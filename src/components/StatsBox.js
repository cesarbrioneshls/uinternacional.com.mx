import React from 'react';
import { FaHandshake } from 'react-icons/fa';
import { BiTimer } from 'react-icons/bi';
import { GiThreeFriends, GiStairsGoal } from 'react-icons/gi';

const StatsBox = ({ primaryText, secondaryText }) => (
  <>
    <div className="flex flex-col sm:flex-col justify-between items-center mx-auto py-4 px-8">
      <p className="text-2xl lg:text-2xl font-semibold text-primary text-center">{primaryText}</p>
      <p className="font-semibold mb-6">{secondaryText}</p>

      {/* Eficacia */}
      {/* <BiTimer size={120} className="mt-5" color="#808080" /> */}

      {/* Integridad */}
      {/* <FaHandshake size={120} className="mt-5" color="#808080" /> */}

      {/* Resilencia */}
      {/* <GiThreeFriends size={120} className="mt-5" color="#808080" /> */}

      {/* Persistenciau */}
      <GiStairsGoal size={120} className="" color="#808080" />
    </div>
  </>
);

export default StatsBox;
