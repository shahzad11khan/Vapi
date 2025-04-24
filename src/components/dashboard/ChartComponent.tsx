import React from 'react';
// import axios from 'axios';
import WeeklyAnalyticsPanel from '../Reuseable/SalesAnalytics';
import RegionsMap from '../Reuseable/RegionMap';

const ChartComponent: React.FC = () => {

  return (
    <div className="flex gap-6 mt-8">
      {/* Chart 1 */}
      <div className="w-1/2 h-[579px] bg-white rounded-xl shadow-md p-4">
          <WeeklyAnalyticsPanel />
      </div>

      {/* Chart 2 */}
      <div className="w-1/2 h-[579px] bg-white rounded-xl shadow-md p-4">
          <RegionsMap />
        </div>
    </div>
  );
};

export default ChartComponent;
