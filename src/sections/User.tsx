"use client";
import React, { useState } from "react";

// Helper function to generate a random date before a given date
const getRandomDateBefore = (defaultDate: Date) => {
  const daysBefore = Math.floor(Math.random() * 7) + 1; // Random number between 1 and 7
  const newDate = new Date(defaultDate);
  newDate.setDate(newDate.getDate() - daysBefore); // Subtract random days from default date
  return newDate;
};

const PackageTracking = () => {
  // State to manage reward points
  const [rewardPoints, setRewardPoints] = useState(100); // Example initial points

  // State to track which parcels have been scheduled using AI
  const [scheduledParcels, setScheduledParcels] = useState<number[]>([]);

  // State to track the expanded parcel
  const [expandedParcelId, setExpandedParcelId] = useState<number | null>(null);

  // List of parcels (sample data)
  const parcels = [
    {
      id: 1,
      shipmentNumber: "NOI20294129213012",
      status: "Package being picked up",
      sentBy: "John Doe",
      sentDate: new Date("2023-09-10"),
      defaultDeliveryDate: new Date("2023-09-20"),
      aiScheduledDate: null as Date | null, // null by default
    },
    {
      id: 2,
      shipmentNumber: "NOI20294129213013",
      status: "Out for delivery",
      sentBy: "Jane Smith",
      sentDate: new Date("2023-09-11"),
      defaultDeliveryDate: new Date("2023-09-21"),
      aiScheduledDate: null as Date | null, // null by default
    },
    {
      id: 3,
      shipmentNumber: "NOI20294129213014",
      status: "Delivered",
      sentBy: "Bob Johnson",
      sentDate: new Date("2023-09-12"),
      defaultDeliveryDate: new Date("2023-09-22"),
      aiScheduledDate: null as Date | null, // null by default
    },
  ];

  // Function to handle AI scheduling for a specific parcel
  const handleAiSchedule = (parcelId: number) => {
    const updatedParcels = parcels.map((parcel) => {
      if (parcel.id === parcelId && !scheduledParcels.includes(parcelId)) {
        // Generate a new AI scheduled date before the default delivery date
        parcel.aiScheduledDate = getRandomDateBefore(parcel.defaultDeliveryDate);

        // Add the parcel to the list of scheduled parcels and update reward points
        setScheduledParcels([...scheduledParcels, parcelId]);
        setRewardPoints(rewardPoints + 10); // Add reward points
      }
      return parcel;
    });
  };

  // Function to toggle the expanded state of a parcel
  const toggleParcelDetails = (parcelId: number) => {
    setExpandedParcelId(expandedParcelId === parcelId ? null : parcelId);
  };

  return (
    <div className="min-h-[100vh] flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4 ">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Track your package</h2>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none"
            placeholder="Enter your receipt number"
          />
          <button className="px-4 py-2 bg-black text-white rounded-md">Track</button>
        </div>

        {/* History Section */}
        <div className="mt-6">
          <h3 className="text-md font-bold mb-2">History</h3>
          {/* ... (history code) */}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 bg-white p-4 rounded-lg shadow-md">
        {/* Reward Points Display */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Your saved packages</h2>
          <div className="text-right">
            <p className="text-xl font-bold">Reward Points: {rewardPoints}</p>
            <p className="text-sm text-gray-500">Earn more by scheduling with AI</p>
          </div>
        </div>

        <div className="flex space-x-4 my-4">
          {/* Status Stats */}
          {/* ... (status stats code) */}
        </div>

        {/* Parcel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {parcels.map((parcel) => (
            <div key={parcel.id} className="border p-4 rounded-lg shadow-md">
              <p className="text-sm font-bold">Shipment Number</p>
              <p className="text-xs text-gray-500">{parcel.shipmentNumber}</p>
              <div className="flex justify-between items-center my-2">
                <p className="text-sm text-gray-500">{parcel.status}</p>
                <p className="text-sm text-green-500">Now</p>
              </div>
              <button
                className={`w-full py-2 rounded-md mb-2 ${
                  scheduledParcels.includes(parcel.id)
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-black text-white"
                }`}
                onClick={() => handleAiSchedule(parcel.id)}
                disabled={scheduledParcels.includes(parcel.id)}
              >
                {scheduledParcels.includes(parcel.id)
                  ? "Already Scheduled"
                  : "Schedule Delivery with AI (+10 points)"}
              </button>
              <button
                className="w-full py-2 bg-gray-500 text-white rounded-md"
                onClick={() => toggleParcelDetails(parcel.id)}
              >
                {expandedParcelId === parcel.id ? "Hide Details" : "View Details"}
              </button>

              {/* Expanded View */}
              {expandedParcelId === parcel.id && (
                <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-bold">Sent By: {parcel.sentBy}</p>
                  <p className="text-sm">Sent Date: {parcel.sentDate.toDateString()}</p>
                  <p className="text-sm">
                    Default Delivery Date: {parcel.defaultDeliveryDate.toDateString()}
                  </p>
                  <p className="text-sm">
                    AI Scheduled Date:{" "}
                    {parcel.aiScheduledDate
                      ? parcel.aiScheduledDate.toDateString()
                      : "Not Scheduled with AI"}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageTracking;
