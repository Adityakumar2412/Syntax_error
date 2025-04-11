
import React, { useState } from 'react';
import { Award, Book, BookOpen, ChevronDown, ChevronUp, FileText, BarChart3 } from 'lucide-react';

const gradesData = [
  {
    courseId: 'MATH101',
    courseName: 'Mathematics 101',
    grade: 'A',
    percentage: 92,
    assignments: [
      { name: 'Quiz 1', score: '18/20', percentage: 90, weight: 10 },
      { name: 'Midterm Exam', score: '87/100', percentage: 87, weight: 30 },
      { name: 'Homework Set 1', score: '49/50', percentage: 98, weight: 15 },
      { name: 'Homework Set 2', score: '45/50', percentage: 90, weight: 15 },
      { name: 'Final Exam', score: '95/100', percentage: 95, weight: 30 },
    ]
  },
  {
    courseId: 'PHYS202',
    courseName: 'Physics 202',
    grade: 'B+',
    percentage: 88,
    assignments: [
      { name: 'Lab Report 1', score: '42/50', percentage: 84, weight: 15 },
      { name: 'Quiz 1', score: '17/20', percentage: 85, weight: 10 },
      { name: 'Midterm Exam', score: '83/100', percentage: 83, weight: 25 },
      { name: 'Lab Report 2', score: '47/50', percentage: 94, weight: 15 },
      { name: 'Final Exam', score: '89/100', percentage: 89, weight: 35 },
    ]
  },
  {
    courseId: 'CS303',
    courseName: 'Computer Science 303',
    grade: 'A',
    percentage: 94,
    assignments: [
      { name: 'Programming Assignment 1', score: '50/50', percentage: 100, weight: 15 },
      { name: 'Quiz 1', score: '19/20', percentage: 95, weight: 10 },
      { name: 'Midterm Project', score: '90/100', percentage: 90, weight: 25 },
      { name: 'Programming Assignment 2', score: '48/50', percentage: 96, weight: 15 },
      { name: 'Final Project', score: '93/100', percentage: 93, weight: 35 },
    ]
  },
  {
    courseId: 'CHEM101',
    courseName: 'Chemistry 101',
    grade: 'B',
    percentage: 85,
    assignments: [
      { name: 'Lab Report 1', score: '42/50', percentage: 84, weight: 15 },
      { name: 'Quiz 1', score: '16/20', percentage: 80, weight: 10 },
      { name: 'Midterm Exam', score: '81/100', percentage: 81, weight: 25 },
      { name: 'Lab Report 2', score: '45/50', percentage: 90, weight: 15 },
      { name: 'Final Exam', score: '86/100', percentage: 86, weight: 35 },
    ]
  }
];

const GradeCircle = ({ percentage }: { percentage: number }) => {
  let color = 'text-red-500';
  if (percentage >= 90) {
    color = 'text-green-500';
  } else if (percentage >= 80) {
    color = 'text-blue-500';
  } else if (percentage >= 70) {
    color = 'text-yellow-500';
  }

  return (
    <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-full border-4 ${color.replace('text', 'border')}`}>
      <span className={`text-sm font-bold ${color}`}>{percentage}%</span>
    </div>
  );
};

const Grades = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleCourse = (courseId: string) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(courseId);
    }
  };

  const calculateGPA = () => {
    const gradePoints: Record<string, number> = {
      'A+': 4.0, 'A': 4.0, 'A-': 3.7,
      'B+': 3.3, 'B': 3.0, 'B-': 2.7,
      'C+': 2.3, 'C': 2.0, 'C-': 1.7,
      'D+': 1.3, 'D': 1.0, 'F': 0.0
    };

    const totalPoints = gradesData.reduce((sum, course) => {
      return sum + gradePoints[course.grade.split('-')[0]];
    }, 0);

    return (totalPoints / gradesData.length).toFixed(2);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Grades</h1>
        <p className="text-gray-500">View your academic performance and course grades</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 flex items-center">
          <div className="p-3 rounded-full bg-blue-50 text-erp-blue mr-4">
            <Award size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Current GPA</p>
            <h3 className="text-2xl font-semibold">{calculateGPA()}/4.0</h3>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 flex items-center">
          <div className="p-3 rounded-full bg-green-50 text-green-600 mr-4">
            <BookOpen size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Courses Completed</p>
            <h3 className="text-2xl font-semibold">18/36</h3>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 flex items-center">
          <div className="p-3 rounded-full bg-purple-50 text-purple-600 mr-4">
            <Book size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Credits Earned</p>
            <h3 className="text-2xl font-semibold">54/120</h3>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 flex items-center">
          <div className="p-3 rounded-full bg-orange-50 text-orange-600 mr-4">
            <FileText size={24} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Dean's List</p>
            <h3 className="text-2xl font-semibold">2 Semesters</h3>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-lg font-semibold">Course Grades</h2>
            </div>
            
            <div>
              {gradesData.map((course) => (
                <div key={course.courseId} className="border-b border-gray-100 last:border-b-0">
                  <div 
                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                    onClick={() => toggleCourse(course.courseId)}
                  >
                    <div className="flex items-center">
                      <GradeCircle percentage={course.percentage} />
                      <div className="ml-4">
                        <h3 className="font-medium">{course.courseName}</h3>
                        <p className="text-sm text-gray-500">{course.courseId}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <p className="font-bold text-lg">{course.grade}</p>
                        <p className="text-xs text-gray-500">Grade</p>
                      </div>
                      
                      <button className="p-1">
                        {expandedCourse === course.courseId ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                  </div>
                  
                  {expandedCourse === course.courseId && (
                    <div className="p-4 bg-gray-50">
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Assignment</th>
                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Score</th>
                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Weight</th>
                            <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Grade</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {course.assignments.map((assignment, index) => (
                            <tr key={index}>
                              <td className="py-2 text-sm">{assignment.name}</td>
                              <td className="py-2 text-sm">{assignment.score}</td>
                              <td className="py-2 text-sm">{assignment.weight}%</td>
                              <td className="py-2 text-sm font-medium">
                                {assignment.percentage}%
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
            <div className="flex items-center mb-4">
              <BarChart3 size={20} className="text-erp-blue mr-2" />
              <h2 className="text-lg font-semibold">Grade Distribution</h2>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>A (90-100%)</span>
                  <span>2 courses</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 rounded-full h-2" style={{ width: '50%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>B (80-89%)</span>
                  <span>2 courses</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 rounded-full h-2" style={{ width: '50%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>C (70-79%)</span>
                  <span>0 courses</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 rounded-full h-2" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>D (60-69%)</span>
                  <span>0 courses</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 rounded-full h-2" style={{ width: '0%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>F (below 60%)</span>
                  <span>0 courses</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 rounded-full h-2" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
            <h2 className="text-lg font-semibold mb-4">Academic Standing</h2>
            <div className="bg-green-50 p-4 rounded-md border border-green-100">
              <p className="text-green-800 text-sm font-medium">Good Standing</p>
              <p className="text-green-700 text-xs mt-1">Your GPA meets or exceeds the minimum requirements.</p>
            </div>
            
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">GPA Progression</p>
              <div className="flex items-center">
                <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-green-500" style={{ width: '75%' }}></div>
                </div>
                <span className="ml-2 text-xs font-medium">3.8</span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">Freshman</span>
                <span className="text-xs text-gray-500">Senior</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;
