"use client";
import React, { useState } from "react";
import parcel from '@/public/assets/parcel.jpeg'; // Adjust if the path is different

const SenderPackageTracking = () => {
  // State to track the expanded parcel
  const [expandedParcelId, setExpandedParcelId] = useState<number | null>(null);

  // State to handle search query and searched parcel
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedParcel, setSearchedParcel] = useState<any>(null);

  // State for manual scheduling
  const [manualDeliveryDates, setManualDeliveryDates] = useState<Record<number, { date: string; time: string }>>({});

  // List of parcels sent by the sender (sample data)
  const [parcels, setParcels] = useState([
    {
      id: 1,
      shipmentNumber: "NOI20294129213012",
      status: "Package being picked up",
      receiver: "John Doe",
      sentDate: new Date("2023-09-10"),
      expectedDeliveryDate: new Date("2023-09-20"),
    },
    {
      id: 2,
      shipmentNumber: "NOI20294129213013",
      status: "Out for delivery",
      receiver: "Jane Smith",
      sentDate: new Date("2023-09-11"),
      expectedDeliveryDate: new Date("2023-09-21"),
    },
    {
      id: 3,
      shipmentNumber: "NOI20294129213014",
      status: "Delivered",
      receiver: "Bob Johnson",
      sentDate: new Date("2023-09-12"),
      expectedDeliveryDate: new Date("2023-09-22"),
    },
  ]);

  // Function to handle parcel search
  const handleSearch = () => {
    const foundParcel = parcels.find((parcel) => parcel.shipmentNumber === searchQuery);
    setSearchedParcel(foundParcel || null);
  };

  // Function to toggle the expanded state of a parcel
  const toggleParcelDetails = (parcelId: number) => {
    setExpandedParcelId(expandedParcelId === parcelId ? null : parcelId);
  };

  // Function to handle manual scheduling
  const handleManualSchedule = (id: number, date: string, time: string) => {
    setManualDeliveryDates({
      ...manualDeliveryDates,
      [id]: { date, time },
    });
  };

  return (
    <div className="min-h-[100vh] flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-[#d4d4d4] p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Track Sent Packages</h2>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none"
            placeholder="Enter shipment number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-black text-white rounded-md"
            onClick={handleSearch}
          >
            Track
          </button>
        </div>

        {/* Search Result */}
        {searchedParcel && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-md font-bold">Search Result</h3>
            <p className="text-sm font-medium">Receiver: {searchedParcel.receiver}</p>
            <p className="text-xs text-gray-500">Shipment Number: {searchedParcel.shipmentNumber}</p>
            <p className="text-sm text-gray-700 mt-1">Sent Date: {searchedParcel.sentDate.toDateString()}</p>
            <p className="text-sm">Expected Delivery Date: {searchedParcel.expectedDeliveryDate.toDateString()}</p>
            <p className="text-sm">Status: {searchedParcel.status}</p>
          </div>
        )}

        {/* History Section */}
        <div className="mt-6">
          <h3 className="text-md font-bold mb-2">Sent History</h3>
          <div className="space-y-2">
            {parcels.map((parcel) => (
              <div key={parcel.id} className="bg-gray-100 p-4 rounded-lg">
                {/* Main Card Info */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Receiver: {parcel.receiver}</p>
                    <p className="text-xs text-gray-500">Shipment Number: {parcel.shipmentNumber}</p>
                    <p className="text-sm text-gray-700 mt-1">Sent Date: {parcel.sentDate.toDateString()}</p>
                  </div>
                  <button
                    className="px-2 py-1 bg-blue-500 text-white text-sm rounded-lg"
                    onClick={() => toggleParcelDetails(parcel.id)}
                  >
                    {expandedParcelId === parcel.id ? "Hide Details" : "View Details"}
                  </button>
                </div>

                {/* Expanded View */}
                {expandedParcelId === parcel.id && (
                  <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm font-bold">Receiver: {parcel.receiver}</p>
                    <p className="text-sm">Sent Date: {parcel.sentDate.toDateString()}</p>
                    <p className="text-sm">Expected Delivery Date: {parcel.expectedDeliveryDate.toDateString()}</p>
                    <p className="text-sm">Status: {parcel.status}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 bg-[#e4e4e4] p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Your Sent Deliveries</h2>
        </div>

        {/* Parcel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {parcels.map((parcel) => (
            <div key={parcel.id} className="relative border p-5 rounded-lg shadow-md bg-white">
              {/* Receiver's Name */}
              <p className="absolute top-2 right-2 text-md font-semibold text-[#fe854f]">
                Receiver: {parcel.receiver}
              </p>

              {/* Image of Parcel */}
              <img 
                src="/assets/parcel1.png" // Ensure the image path is correct
                alt="Parcel"
                className="w-full h-60 object-contain mb-4" // Style the image
              />

              <p className="text-sm font-bold">Shipment Number</p>
              <p className="text-xs text-gray-500">{parcel.shipmentNumber}</p>
              <div className="flex justify-between items-center my-2">
                <p className="text-sm text-gray-500">{parcel.status}</p>
                <p className="text-sm text-green-500">Status</p>
              </div>
              <button
                className="w-full py-2 bg-white text-black rounded-md"
                onClick={() => toggleParcelDetails(parcel.id)}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Manual Scheduling
                </label>
                <input
                  type="date"
                  className="w-full mb-2 p-2 border rounded-md"
                  onChange={(e) =>
                    handleManualSchedule(
                      parcel.id,
                      e.target.value,
                      manualDeliveryDates[parcel.id]?.time || ""
                    )
                  }
                />
                <input
                  type="time"
                  className="w-full mb-2 p-2 border rounded-md"
                  onChange={(e) =>
                    handleManualSchedule(
                      parcel.id,
                      manualDeliveryDates[parcel.id]?.date || "",
                      e.target.value
                    )
                  }
                />
                {expandedParcelId === parcel.id ? "Hide Details" : "View Details"}
              </button>

              {/* Expanded View */}
              {expandedParcelId === parcel.id && (
                <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-bold">Receiver: {parcel.receiver}</p>
                  <p className="text-sm">Sent Date: {parcel.sentDate.toDateString()}</p>
                  <p className="text-sm">Expected Delivery Date: {parcel.expectedDeliveryDate.toDateString()}</p>
                  <p className="text-sm">Status: {parcel.status}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SenderPackageTracking;