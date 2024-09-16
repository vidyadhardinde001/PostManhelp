"use client";
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="font-bold text-lg">Keitoto Studio</div>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded">
                <span className="bg-blue-500 text-white p-2 rounded">T</span> 
                <span>Time</span>
              </a>
            </li>
            {/* Repeat for other icons */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white p-4 shadow flex items-center justify-between">
          <div className="text-lg font-bold">Timesheet</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">+ Track time</button>
        </header>

        {/* Table */}
        <div className="flex-1 overflow-auto p-4">
          <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">To</th>
                <th className="p-3 text-left">Date of Arrival</th>
                <th className="p-3 text-left">Date of Departure</th>
                <th className="p-3 text-left">Credits</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Repeat for each row */}
              <tr className="border-b border-gray-200">
                <td className="p-3">Mr. Dinesh Nikam</td>
                <td className="p-3">10/08/2024</td>
                <td className="p-3">15/08/2024</td>
                <td className="p-3">4030</td>
                <td className="p-3 flex space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">AI Scheduler</button>
                  <button className="bg-gray-300 text-black px-3 py-1 rounded">Manual</button>
                </td>
              </tr>
              {/* Repeat more rows */}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <footer className="p-4 bg-white flex justify-end shadow-md">
          <button className="bg-black text-white px-4 py-2 rounded">Submit for approval</button>
        </footer>
      </main>
    </div>
  );
};

export default Hero;
