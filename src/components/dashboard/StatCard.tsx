
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string;
  positive?: boolean;
  bgColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  change, 
  positive = true,
  bgColor = 'bg-white'
}) => {
  return (
    <div className={`${bgColor} rounded-lg shadow-sm p-5 border border-gray-100`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
          {change && (
            <p className={`text-xs mt-2 ${positive ? 'text-green-500' : 'text-red-500'}`}>
              {positive ? '↑' : '↓'} {change} from last semester
            </p>
          )}
        </div>
        <div className="p-2 rounded-full bg-blue-50 text-erp-blue">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
