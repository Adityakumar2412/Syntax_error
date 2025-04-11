
import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import CourseCard from '../components/dashboard/CourseCard';
import AnnouncementItem from '../components/dashboard/AnnouncementItem';
import AttendanceChart from '../components/dashboard/AttendanceChart';
import { Award, BookOpen, Calendar, Clock, Percent } from 'lucide-react';

const attendanceData = [
  { name: 'Present', value: 85, color: '#4CAF50' },
  { name: 'Absent', value: 10, color: '#F44336' },
  { name: 'Excused', value: 5, color: '#FFC107' },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Welcome back, John! Here's what's happening with your academics.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="GPA" 
          value="3.8/4.0" 
          icon={<Award size={24} />} 
          change="0.2" 
          positive={true} 
        />
        <StatCard 
          title="Attendance" 
          value="85%" 
          icon={<Calendar size={24} />} 
          change="5%" 
          positive={false} 
        />
        <StatCard 
          title="Courses" 
          value="6" 
          icon={<BookOpen size={24} />} 
        />
        <StatCard 
          title="Class Hours" 
          value="24h/week" 
          icon={<Clock size={24} />} 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 mb-6">
            <h2 className="text-lg font-semibold mb-4">Current Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CourseCard 
                id="mathematics" 
                title="Mathematics 101" 
                instructor="Dr. Jane Smith" 
                progress={75} 
                nextClass="Today, 10:00 AM"
                bgColor="bg-blue-50" 
              />
              <CourseCard 
                id="physics" 
                title="Physics 202" 
                instructor="Prof. Robert Johnson" 
                progress={60} 
                nextClass="Tomorrow, 2:00 PM" 
              />
              <CourseCard 
                id="computer-science" 
                title="Computer Science 303" 
                instructor="Dr. Alan Turing" 
                progress={90} 
                nextClass="Wednesday, 11:00 AM" 
              />
              <CourseCard 
                id="chemistry" 
                title="Chemistry 101" 
                instructor="Dr. Marie Curie" 
                progress={45} 
                nextClass="Thursday, 9:00 AM" 
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
            <h2 className="text-lg font-semibold mb-4">Upcoming Assignments</h2>
            <div className="space-y-4">
              <div className="flex justify-between p-3 bg-blue-50 rounded-md">
                <div>
                  <h4 className="font-medium">Physics Lab Report</h4>
                  <p className="text-sm text-gray-600">Physics 202</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-red-500 font-medium">Due Tomorrow</span>
                  <p className="text-xs text-gray-500">11:59 PM</p>
                </div>
              </div>
              
              <div className="flex justify-between p-3 rounded-md border border-gray-100">
                <div>
                  <h4 className="font-medium">Programming Assignment #3</h4>
                  <p className="text-sm text-gray-600">Computer Science 303</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-600 font-medium">Due in 5 days</span>
                  <p className="text-xs text-gray-500">May 10, 11:59 PM</p>
                </div>
              </div>
              
              <div className="flex justify-between p-3 rounded-md border border-gray-100">
                <div>
                  <h4 className="font-medium">Calculus Problems Set</h4>
                  <p className="text-sm text-gray-600">Mathematics 101</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-600 font-medium">Due in 7 days</span>
                  <p className="text-xs text-gray-500">May 12, 11:59 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
            <h2 className="text-lg font-semibold mb-4">Attendance Overview</h2>
            <AttendanceChart data={attendanceData} />
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-lg font-semibold">Recent Announcements</h2>
            </div>
            <div className="max-h-96 overflow-y-auto">
              <AnnouncementItem 
                title="Physics Lab Canceled" 
                message="Tomorrow's physics lab has been canceled due to equipment maintenance. The lab will be rescheduled for next week." 
                date="Today, 2:30 PM" 
                course="Physics 202"
                unread={true}
              />
              <AnnouncementItem 
                title="Mathematics Quiz Reminder" 
                message="Don't forget about the quiz this Friday covering chapters 5-7. Review sessions will be held on Thursday." 
                date="Yesterday" 
                course="Mathematics 101"
              />
              <AnnouncementItem 
                title="Spring Break Schedule" 
                message="Classes will be suspended from May 20-27 for spring break. Regular schedule resumes on May 28." 
                date="2 days ago"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
