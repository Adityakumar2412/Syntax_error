
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Calendar, 
  Award, 
  ClipboardList, 
  Bell, 
  Settings,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

const SidebarItem = ({ icon, label, to, active, children, open, toggleOpen }: { 
  icon: React.ReactNode, 
  label: string, 
  to?: string, 
  active: boolean,
  children?: React.ReactNode,
  open?: boolean,
  toggleOpen?: () => void
}) => {
  if (children) {
    return (
      <div className="mb-1">
        <button 
          onClick={toggleOpen} 
          className={`w-full flex items-center justify-between p-3 rounded-md transition-colors ${active ? 'bg-erp-lightBlue text-white' : 'hover:bg-gray-100'}`}
        >
          <div className="flex items-center">
            {icon}
            <span className="ml-3">{label}</span>
          </div>
          {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
        
        {open && (
          <div className="pl-10 py-1">
            {children}
          </div>
        )}
      </div>
    );
  }
  
  return (
    <Link 
      to={to || "#"} 
      className={`flex items-center p-3 rounded-md transition-colors mb-1 ${active ? 'bg-erp-lightBlue text-white' : 'hover:bg-gray-100'}`}
    >
      {icon}
      <span className="ml-3">{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [coursesOpen, setCoursesOpen] = useState(true);

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <img 
            src="https://via.placeholder.com/40" 
            alt="Profile" 
            className="rounded-full w-10 h-10 object-cover"
          />
          <div className="ml-3">
            <h4 className="font-medium text-sm">John Doe</h4>
            <p className="text-xs text-gray-500">ID: STU2023001</p>
          </div>
        </div>
        
        <div className="space-y-1">
          <SidebarItem 
            icon={<Home size={20} />} 
            label="Dashboard" 
            to="/" 
            active={currentPath === '/'} 
          />
          
          <SidebarItem 
            icon={<BookOpen size={20} />} 
            label="Courses" 
            active={currentPath.includes('/courses')}
            open={coursesOpen}
            toggleOpen={() => setCoursesOpen(!coursesOpen)}
          >
            <Link to="/courses/mathematics" className={`block py-2 px-3 rounded-md ${currentPath === '/courses/mathematics' ? 'text-erp-blue font-medium' : 'hover:bg-gray-100'}`}>
              Mathematics
            </Link>
            <Link to="/courses/physics" className={`block py-2 px-3 rounded-md ${currentPath === '/courses/physics' ? 'text-erp-blue font-medium' : 'hover:bg-gray-100'}`}>
              Physics
            </Link>
            <Link to="/courses/computer-science" className={`block py-2 px-3 rounded-md ${currentPath === '/courses/computer-science' ? 'text-erp-blue font-medium' : 'hover:bg-gray-100'}`}>
              Computer Science
            </Link>
          </SidebarItem>
          
          <SidebarItem 
            icon={<Calendar size={20} />} 
            label="Attendance" 
            to="/attendance" 
            active={currentPath === '/attendance'} 
          />
          
          <SidebarItem 
            icon={<Award size={20} />} 
            label="Grades" 
            to="/grades" 
            active={currentPath === '/grades'} 
          />
          
          <SidebarItem 
            icon={<ClipboardList size={20} />} 
            label="Assignments" 
            to="/assignments" 
            active={currentPath === '/assignments'} 
          />
          
          <SidebarItem 
            icon={<Bell size={20} />} 
            label="Announcements" 
            to="/announcements" 
            active={currentPath === '/announcements'} 
          />
          
          <SidebarItem 
            icon={<Settings size={20} />} 
            label="Settings" 
            to="/settings" 
            active={currentPath === '/settings'} 
          />
        </div>
      </div>
      
      <div className="mt-auto p-4 border-t border-gray-200">
        <div className="bg-blue-50 p-3 rounded-md">
          <h5 className="font-medium text-sm text-erp-blue mb-1">Academic Calendar</h5>
          <p className="text-xs text-gray-600">Next Exam: May 15, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
