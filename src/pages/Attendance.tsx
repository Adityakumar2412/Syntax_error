
import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Check, X, AlertCircle } from 'lucide-react';

const attendanceData = [
  { date: '2025-04-01', status: 'present', course: 'Mathematics 101' },
  { date: '2025-04-01', status: 'present', course: 'Physics 202' },
  { date: '2025-04-02', status: 'present', course: 'Computer Science 303' },
  { date: '2025-04-02', status: 'absent', course: 'Chemistry 101' },
  { date: '2025-04-03', status: 'present', course: 'Mathematics 101' },
  { date: '2025-04-03', status: 'excused', course: 'Physics 202' },
  { date: '2025-04-04', status: 'present', course: 'Computer Science 303' },
  { date: '2025-04-04', status: 'present', course: 'Chemistry 101' },
  { date: '2025-04-07', status: 'present', course: 'Mathematics 101' },
  { date: '2025-04-07', status: 'present', course: 'Physics 202' },
  { date: '2025-04-08', status: 'absent', course: 'Computer Science 303' },
  { date: '2025-04-08', status: 'present', course: 'Chemistry 101' },
  { date: '2025-04-09', status: 'present', course: 'Mathematics 101' },
  { date: '2025-04-09', status: 'present', course: 'Physics 202' },
  { date: '2025-04-10', status: 'present', course: 'Computer Science 303' },
  { date: '2025-04-10', status: 'present', course: 'Chemistry 101' },
  { date: '2025-04-11', status: 'present', course: 'Mathematics 101' },
  { date: '2025-04-11', status: 'excused', course: 'Physics 202' },
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

const StatusBadge = ({ status }: { status: string }) => {
  if (status === 'present') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        <Check size={12} className="mr-1" />
        Present
      </span>
    );
  } else if (status === 'absent') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
        <X size={12} className="mr-1" />
        Absent
      </span>
    );
  } else {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
        <AlertCircle size={12} className="mr-1" />
        Excused
      </span>
    );
  }
};

const Attendance = () => {
  const [currentMonth, setCurrentMonth] = useState(3); // April (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDate, setSelectedDate] = useState('2025-04-10');

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  // Generate calendar days
  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null); // Empty slots for days before the 1st of the month
  }
  
  for (let day = 1; day <= daysInMonth; day++) {
    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayAttendance = attendanceData.filter(a => a.date === dateString);
    const hasAbsence = dayAttendance.some(a => a.status === 'absent');
    const hasExcused = dayAttendance.some(a => a.status === 'excused');
    
    let statusClass = '';
    if (dayAttendance.length > 0) {
      if (hasAbsence) {
        statusClass = 'bg-red-100';
      } else if (hasExcused) {
        statusClass = 'bg-yellow-100';
      } else {
        statusClass = 'bg-green-100';
      }
    }
    
    calendarDays.push({
      day,
      date: dateString,
      hasAttendance: dayAttendance.length > 0,
      statusClass
    });
  }
  
  const selectedDateAttendance = attendanceData.filter(a => a.date === selectedDate);
  
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Attendance Records</h1>
        <p className="text-gray-500">Track your class attendance and view your attendance history</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Calendar</h2>
              <div className="flex space-x-2">
                <button 
                  onClick={handlePrevMonth}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="font-medium">{months[currentMonth]} {currentYear}</span>
                <button 
                  onClick={handleNextMonth}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-2">
              <div className="text-center text-sm font-medium text-gray-500">Sun</div>
              <div className="text-center text-sm font-medium text-gray-500">Mon</div>
              <div className="text-center text-sm font-medium text-gray-500">Tue</div>
              <div className="text-center text-sm font-medium text-gray-500">Wed</div>
              <div className="text-center text-sm font-medium text-gray-500">Thu</div>
              <div className="text-center text-sm font-medium text-gray-500">Fri</div>
              <div className="text-center text-sm font-medium text-gray-500">Sat</div>
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <div key={index} className="aspect-square">
                  {day && (
                    <button
                      onClick={() => setSelectedDate(day.date)}
                      className={`w-full h-full flex items-center justify-center rounded-md ${
                        day.date === selectedDate ? 'bg-erp-blue text-white' : day.statusClass
                      } ${day.hasAttendance ? 'font-medium' : 'text-gray-500'}`}
                    >
                      {day.day}
                    </button>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-4 space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-100 mr-2"></div>
                <span className="text-sm text-gray-600">Present</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-100 mr-2"></div>
                <span className="text-sm text-gray-600">Absent</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-100 mr-2"></div>
                <span className="text-sm text-gray-600">Excused</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
            <div className="flex items-center mb-4">
              <CalendarIcon size={20} className="text-erp-blue mr-2" />
              <h2 className="text-lg font-semibold">
                {selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                }) : 'Select a date'}
              </h2>
            </div>
            
            {selectedDateAttendance.length > 0 ? (
              <div className="space-y-3">
                {selectedDateAttendance.map((record, index) => (
                  <div key={index} className="p-3 rounded-md border border-gray-100">
                    <h4 className="font-medium">{record.course}</h4>
                    <div className="mt-2">
                      <StatusBadge status={record.status} />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                <p>No attendance records for this date</p>
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 mt-6">
            <h2 className="text-lg font-semibold mb-4">Attendance Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Present</span>
                <div className="flex items-center">
                  <span className="font-medium mr-2">85%</span>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 rounded-full h-2" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Absent</span>
                <div className="flex items-center">
                  <span className="font-medium mr-2">10%</span>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 rounded-full h-2" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Excused</span>
                <div className="flex items-center">
                  <span className="font-medium mr-2">5%</span>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 rounded-full h-2" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">Minimum attendance required: 75%</p>
              <p className="text-sm text-green-600 font-medium">You're above the required attendance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
