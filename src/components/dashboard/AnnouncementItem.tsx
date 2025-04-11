
import React from 'react';

interface AnnouncementItemProps {
  title: string;
  message: string;
  date: string;
  course?: string;
  unread?: boolean;
}

const AnnouncementItem: React.FC<AnnouncementItemProps> = ({ 
  title, 
  message, 
  date, 
  course, 
  unread = false 
}) => {
  return (
    <div className={`p-4 border-b border-gray-100 ${unread ? 'bg-blue-50' : ''}`}>
      <div className="flex justify-between items-start">
        <h4 className="font-medium text-base">{title}</h4>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      
      {course && (
        <div className="mt-1">
          <span className="text-xs bg-blue-100 text-erp-blue px-2 py-1 rounded-full">
            {course}
          </span>
        </div>
      )}
      
      <p className="mt-2 text-sm text-gray-600">{message}</p>
      
      {unread && (
        <div className="mt-3 flex justify-end">
          <span className="inline-block w-2 h-2 bg-erp-blue rounded-full"></span>
        </div>
      )}
    </div>
  );
};

export default AnnouncementItem;
