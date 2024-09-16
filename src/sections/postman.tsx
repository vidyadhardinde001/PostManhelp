"use client"; // Mark as client component

import React, { useState } from 'react';

const Dashboard = () => {
  // State for modal, delivery times, reward points, and customer deliveries
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(null); // Track which delivery is being rescheduled
  const [newTime, setNewTime] = useState(''); // Store the newly selected time
  const [deliveryTimes, setDeliveryTimes] = useState({
    customerA: '10:00 AM',
    customerB: '12:00 PM',
    customerC: '2:00 PM',
  });
  const [rewardPoints, setRewardPoints] = useState(3000);
  const [points, setPoints] = useState({
    customerA: 20,
    customerB: 20,
    customerC: 20,
  });
  const [deliveries, setDeliveries] = useState(['customerA', 'customerB', 'customerC']); // List of active deliveries

  // Open modal for rescheduling
  const openModal = (customer) => {
    setSelectedDelivery(customer); // Set the delivery being modified
    setIsModalOpen(true);
  };

  // Save the new delivery time
  const saveTime = () => {
    if (newTime) {
      setDeliveryTimes((prev) => ({
        ...prev,
        [selectedDelivery]: newTime,
      }));
      closeModal();
    }
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setNewTime(''); // Clear the new time after closing the modal
  };

  // Complete delivery and remove it from the list
  const completeDelivery = (customer) => {
    setRewardPoints(rewardPoints + points[customer]);
    setDeliveries((prevDeliveries) => prevDeliveries.filter((item) => item !== customer)); // Remove the completed delivery
  };

  return (
    <div className="h-screen flex flex-col p-6">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Postman Dashboard</h1>
        <div className="rewards-card bg-white shadow-lg rounded-lg p-4 flex items-center">
          {/* Larger Rewards Icon */}
          <img
            src="/assets/rewards.jpeg" // Update this to the correct path for your icon
            alt="Rewards Icon"
            className="w-12 h-12 mr-3" // Adjusted size to make the icon 48x48 pixels
          />
          <div>
            <p className="text-gray-500">Rewards Points</p>
            <h2 id="rewards-points" className="text-2xl font-bold text-yellow-500">{rewardPoints}</h2>
          </div>
        </div>
      </header>

      <main className="flex flex-1">
        {/* Map Section */}
        <section id="map-card" className="bg-white rounded-lg shadow-md p-4 mb-6 max-w-xl mx-auto mr-8">
          <h2 className="text-xl font-semibold mb-4">Next Delivery</h2>
          <div className="map-container bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/assets/postman.png"
              alt="Map showing direction for next delivery"
              className="w-full h-auto"
              style={{ marginLeft: '20px' }}
            />
          </div>
        </section>

        {/* Next Deliveries Section */}
        <section id="next-deliveries" className="flex-1 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">AI Suggested Next Deliveries</h2>
          <ul className="space-y-4">
            {deliveries.map((customer) => (
              <li key={customer} className="flex justify-between items-center">
                <span>
                  Delivery to {customer.charAt(0).toUpperCase() + customer.slice(1)} at{' '}
                  <span className="delivery-time text-gray-500">{deliveryTimes[customer]}</span>,{' '}
                  {points[customer]} points
                </span>
                <div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => openModal(customer)}
                  >
                    Reschedule
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => completeDelivery(customer)}
                  >
                    Complete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Modal for Rescheduling */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Reschedule Delivery</h3>
            <p>Select a new time for the delivery:</p>
            {/* Time input field for selecting a custom time */}
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="mt-4 p-2 border rounded"
            />
            <div className="mt-4 space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={saveTime}>
                Save Time
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;