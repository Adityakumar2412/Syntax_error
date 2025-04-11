
import React from 'react';
import { BookOpen, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  nextClass: string;
  bgColor?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  id, 
  title, 
  instructor, 
  progress, 
  nextClass, 
  bgColor = 'bg-white' 
}) => {
  return (
    <Link to={`/courses/${id}`} className={`block ${bgColor} rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow`}>
      <h3 className="font-semibold text-lg">{title}</h3>
      
      <div className="flex items-center mt-2 text-sm text-gray-600">
        <User size={16} />
        <span className="ml-2">{instructor}</span>
      </div>
      
      <div className="mt-3">
        <div className="flex justify-between text-sm mb-1">
          <span>Progress</span>
          <span className="font-medium">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-erp-blue rounded-full h-2"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex items-center mt-4 text-sm text-gray-600">
        <Clock size={16} />
        <span className="ml-2">Next class: {nextClass}</span>
      </div>
    </Link>
  );
};

export default CourseCard;
