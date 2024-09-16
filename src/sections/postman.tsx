import React from 'react';

const Dashboard = () => {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">
        <div className="flex items-center mb-6">
          <img src="logo.png" alt="Logo" className="h-8 w-8 mr-3" />
          <h1 className="font-bold text-lg">Untitled UI</h1>
        </div>
        <nav className="space-y-4">
          <a href="#" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Dashboard</a>
          <a href="#" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Appearance</a>
          <a href="#" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Database</a>
          <a href="#" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Connections</a>
          <a href="#" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">User management</a>
          {/* Add other nav items */}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 bg-white p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">User Management</h2>
          <div className="flex items-center">
            <span className="mr-4">Florence Shaw</span>
            <img src="user-avatar.png" alt="User Avatar" className="h-8 w-8 rounded-full" />
          </div>
        </header>

        {/* Search and Filters */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <button className="absolute right-2 top-2 text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-6-6M17 10a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" />
              </svg>
            </button>
          </div>
          <button className="bg-gray-200 p-2 rounded-lg">+ Add user</button>
        </div>

        {/* User Table */}
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="p-4 border-b">User Name</th>
              <th className="p-4 border-b">Email</th>
              <th className="p-4 border-b">Access</th>
              <th className="p-4 border-b">Last Active</th>
              <th className="p-4 border-b">Date Added</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="p-4">Florence Shaw</td>
              <td className="p-4">florence@untitledui.com</td>
              <td className="p-4">
                <span className="bg-green-100 text-green-600 p-1 rounded">Admin</span>
              </td>
              <td className="p-4">Mar 4, 2024</td>
              <td className="p-4">July 4, 2022</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end mt-6">
          <button className="p-2 bg-gray-200 rounded-lg mx-1">1</button>
          <button className="p-2 bg-gray-200 rounded-lg mx-1">2</button>
          <button className="p-2 bg-gray-200 rounded-lg mx-1">3</button>
          {/* More pagination buttons */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
