"use client";
import React, { useState } from "react";
import parcel from "@/public/assets/parcel.jpeg";

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

  // State to track expanded history cards
  const [expandedHistoryId, setExpandedHistoryId] = useState<number | null>(
    null
  );

  // State to handle search query and searched parcel
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedParcel, setSearchedParcel] = useState<any>(null);

  // State to track manually scheduled dates and times for each parcel
  const [manualDeliveryDates, setManualDeliveryDates] = useState<{
    [key: number]: { date: string; time: string };
  }>({});

  // State to track delivery location and contact number
  const [deliveryDetails, setDeliveryDetails] = useState<{
    [key: number]: { location: string; contact: string };
  }>({});

  // State to track "Off Location Delivery" checkbox
  const [offLocationDelivery, setOffLocationDelivery] = useState(false);

  // State to track update preferences
  const [updatePreferences, setUpdatePreferences] = useState({
    whatsapp: false,
    gmail: false,
  });

  // State to manage visibility of delivery location and contact number inputs
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);

  // List of parcels (sample data)
  const [parcels, setParcels] = useState([
    {
      id: 1,
      shipmentNumber: "NOI20294129213012",
      status: "Package being picked up",
      sentBy: "John Doe",
      sentDate: new Date("2023-09-10"),
      defaultDeliveryDate: new Date("2023-09-20"),
      aiScheduledDate: null as Date | null,
    },
    {
      id: 2,
      shipmentNumber: "NOI20294129213013",
      status: "Out for delivery",
      sentBy: "Jane Smith",
      sentDate: new Date("2023-09-11"),
      defaultDeliveryDate: new Date("2023-09-21"),
      aiScheduledDate: null as Date | null,
    },
    {
      id: 3,
      shipmentNumber: "NOI20294129213014",
      status: "Delivered",
      sentBy: "Bob Johnson",
      sentDate: new Date("2023-09-12"),
      defaultDeliveryDate: new Date("2023-09-22"),
      aiScheduledDate: null as Date | null,
    },
  ]);

  // Function to handle AI scheduling for a specific parcel
  const handleAiSchedule = (parcelId: number) => {
    const updatedParcels = parcels.map((parcel) => {
      if (parcel.id === parcelId && !scheduledParcels.includes(parcelId)) {
        const aiScheduledDate = getRandomDateBefore(parcel.defaultDeliveryDate);
        return { ...parcel, aiScheduledDate }; // Update the parcel with new AI scheduled date
      }
      return parcel;
    });

    setParcels(updatedParcels);
    setScheduledParcels([...scheduledParcels, parcelId]);
    setRewardPoints(rewardPoints + 10); // Add reward points
  };

  // Function to handle manual scheduling of delivery
  const handleManualSchedule = (
    parcelId: number,
    date: string,
    time: string
  ) => {
    setManualDeliveryDates({
      ...manualDeliveryDates,
      [parcelId]: { date, time },
    });
  };

  // Function to handle changes in delivery details
  const handleDeliveryDetailsChange = (
    parcelId: number,
    location: string,
    contact: string
  ) => {
    setDeliveryDetails({
      ...deliveryDetails,
      [parcelId]: { location, contact },
    });
  };

  // Function to toggle the expanded state of a parcel
  const toggleParcelDetails = (parcelId: number) => {
    setExpandedParcelId(expandedParcelId === parcelId ? null : parcelId);
  };

  // Function to toggle the expanded state of a history card
  const toggleHistoryDetails = (historyId: number) => {
    setExpandedHistoryId(expandedHistoryId === historyId ? null : historyId);
  };

  // Function to handle parcel search
  const handleSearch = () => {
    const foundParcel = parcels.find(
      (parcel) => parcel.shipmentNumber === searchQuery
    );
    setSearchedParcel(foundParcel || null);
  };

  // Function to handle change in update preferences
  const handleUpdatePreferenceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;
    setUpdatePreferences({
      ...updatePreferences,
      [name]: checked,
    });
  };

  return (
    <div className="min-h-[100vh] flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-[#d4d4d4] p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Track your package</h2>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none"
            placeholder="Enter your receipt number"
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
            <p className="text-sm font-medium">
              Sent By: {searchedParcel.sentBy}
            </p>
            <p className="text-xs text-gray-500">
              Shipment Number: {searchedParcel.shipmentNumber}
            </p>
            <p className="text-sm text-gray-700 mt-1">
              {searchedParcel.sentDate.toDateString()}
            </p>
            <p className="text-sm">
              Default Delivery Date:{" "}
              {searchedParcel.defaultDeliveryDate.toDateString()}
            </p>
            <p className="text-sm">
              AI Scheduled Date:{" "}
              {searchedParcel.aiScheduledDate
                ? searchedParcel.aiScheduledDate.toDateString()
                : "Not Scheduled with AI"}
            </p>
          </div>
        )}

        {/* History Section */}
        <div className="mt-6">
          <h3 className="text-md font-bold mb-2">History</h3>
          <div className="space-y-2">
            {parcels.map((parcel) => (
              <div key={parcel.id} className="bg-gray-100 p-4 rounded-lg">
                {/* Main Card Info */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">
                      Sent By: {parcel.sentBy}
                    </p>
                    <p className="text-xs text-gray-500">
                      Shipment Number: {parcel.shipmentNumber}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      {parcel.sentDate.toDateString()}
                    </p>
                  </div>
                  <button
                    className="px-2 py-1 bg-blue-500 text-white text-sm rounded-lg"
                    onClick={() => toggleHistoryDetails(parcel.id)}
                  >
                    {expandedHistoryId === parcel.id
                      ? "Hide Details"
                      : "View Details"}
                  </button>
                </div>

                {/* Expanded View */}
                {expandedHistoryId === parcel.id && (
                  <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm font-bold">
                      Sent By: {parcel.sentBy}
                    </p>
                    <p className="text-sm">
                      Sent Date: {parcel.sentDate.toDateString()}
                    </p>
                    <p className="text-sm">
                      Default Delivery Date:{" "}
                      {parcel.defaultDeliveryDate.toDateString()}
                    </p>
                    <p className="text-sm">
                      AI Scheduled Date:{" "}
                      {parcel.aiScheduledDate
                        ? parcel.aiScheduledDate.toDateString()
                        : "Not Scheduled"}
                    </p>
                    <p className="text-sm">
                      Manually Scheduled Date & Time:{" "}
                      {manualDeliveryDates[parcel.id]
                        ? `${new Date(
                            manualDeliveryDates[parcel.id].date
                          ).toDateString()} ${
                            manualDeliveryDates[parcel.id].time
                          }`
                        : "NIL"}
                    </p>
                    {offLocationDelivery && (
                      <>
                        <p className="text-sm">
                          Delivery Location:{" "}
                          {deliveryDetails[parcel.id]?.location || "NIL"}
                        </p>
                        <p className="text-sm">
                          Contact Number:{" "}
                          {deliveryDetails[parcel.id]?.contact || "NIL"}
                        </p>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Update Preferences */}
          <div className="mt-6">
            <h3 className="text-md font-bold mb-2">Update Preferences</h3>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="whatsapp"
                name="whatsapp"
                checked={updatePreferences.whatsapp}
                onChange={handleUpdatePreferenceChange}
                className="h-5 w-5 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="whatsapp" className="text-sm font-medium">
                Get updates on WhatsApp
              </label>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                id="gmail"
                name="gmail"
                checked={updatePreferences.gmail}
                onChange={handleUpdatePreferenceChange}
                className="h-5 w-5 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="gmail" className="text-sm font-medium">
                Get updates on Gmail
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-md font-bold mb-2">Rewards Information</h3>
            <div className="space-y-2">
              {/* Reward for AI-suggested time */}
              <div className="flex items-center space-x-2">
                <img
                  src="/assets/coin.png" // Use the path to your coin icon image
                  alt="Coin Icon"
                  className="w-5 h-5"
                />
                <p className="text-sm">
                  30 points for choosing AI-suggested time
                </p>
              </div>

              {/* Reward for choosing off-peak time */}
              <div className="flex items-center space-x-2">
                <img
                  src="/assets/coin.png"
                  alt="Coin Icon"
                  className="w-5 h-5"
                />
                <p className="text-sm">
                  50 points for choosing off-peak delivery time
                </p>
              </div>

              {/* Reward for delivery on the first attempt */}
              <div className="flex items-center space-x-2">
                <img
                  src="/assets/coin.png"
                  alt="Coin Icon"
                  className="w-5 h-5"
                />
                <p className="text-sm">
                  20 points for delivery on the first attempt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 bg-[#e4e4e4] p-4 rounded-lg shadow-md">
        {/* Reward Points Display */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Your Deliveries</h2>
          <div className="text-right">
            <div className="flex items-center justify-end">
              <p className="text-xl font-bold">Reward Points: {rewardPoints}</p>
              <img
                src="/assets/coin.png" // Use the path to your coin icon image
                alt="Coin Icon"
                className="w-5 h-5 ml-2"
              />
            </div>
            <p className="text-sm text-gray-500">
              Earn more by scheduling with AI
            </p>
          </div>
        </div>

        {/* Parcel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {parcels.map((parcel) => (
            <div
              key={parcel.id}
              className="relative border p-5 rounded-lg shadow-md bg-white"
            >
              {/* Sender's Name */}
              <p className="absolute top-2 right-2 text-md font-semibold text-[#fe854f]">
                Sent By: {parcel.sentBy}
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
                <p className="text-sm text-green-500">Now</p>
              </div>
              <button
                className={`w-full py-2 rounded-md mb-2 ${
                  scheduledParcels.includes(parcel.id)
                    ? "bg-white text-gray-500 cursor-not-allowed"
                    : "bg-[#5271ff] text-white"
                }`}
                onClick={() => handleAiSchedule(parcel.id)}
                disabled={scheduledParcels.includes(parcel.id)}
              >
                {scheduledParcels.includes(parcel.id)
                  ? "Scheduled by AI"
                  : "Schedule Delivery with AI (+10 points)"}
              </button>
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
              <button
                className="w-full py-2 bg-[#e8e8e8] text-black rounded-md mb-2"
                onClick={() => setShowDeliveryOptions(!showDeliveryOptions)}
              >
                {showDeliveryOptions ? "Hide OLD Details" : "Add OLD"}
              </button>

              {/* Delivery Location and Contact Number */}
              {showDeliveryOptions && (
                <>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Delivery Location
                  </label>
                  <input
                    type="text"
                    className="w-full mb-2 p-2 border rounded-md"
                    placeholder="Enter delivery location"
                    value={deliveryDetails[parcel.id]?.location || ""}
                    onChange={(e) =>
                      handleDeliveryDetailsChange(
                        parcel.id,
                        e.target.value,
                        deliveryDetails[parcel.id]?.contact || ""
                      )
                    }
                  />
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="w-full mb-2 p-2 border rounded-md"
                    placeholder="Enter contact number"
                    value={deliveryDetails[parcel.id]?.contact || ""}
                    onChange={(e) =>
                      handleDeliveryDetailsChange(
                        parcel.id,
                        deliveryDetails[parcel.id]?.location || "",
                        e.target.value
                      )
                    }
                  />
                </>
              )}
              <button
                className="w-full py-2 bg-white text-black rounded-md"
                onClick={() => toggleParcelDetails(parcel.id)}
              >
                {expandedParcelId === parcel.id
                  ? "Hide Details"
                  : "View Details"}
              </button>

              {/* Expanded View */}
              {expandedParcelId === parcel.id && (
                <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-bold">Sent By: {parcel.sentBy}</p>
                  <p className="text-sm">
                    Sent Date: {parcel.sentDate.toDateString()}
                  </p>
                  <p className="text-sm">
                    Default Delivery Date:{" "}
                    {parcel.defaultDeliveryDate.toDateString()}
                  </p>
                  <p className="text-sm">
                    AI Scheduled Date:{" "}
                    {parcel.aiScheduledDate
                      ? parcel.aiScheduledDate.toDateString()
                      : "NIL"}
                  </p>
                  <p className="text-sm">
                    Manually Scheduled Date & Time:{" "}
                    {manualDeliveryDates[parcel.id]
                      ? `${new Date(
                          manualDeliveryDates[parcel.id].date
                        ).toDateString()} ${
                          manualDeliveryDates[parcel.id].time
                        }`
                      : "NIL"}
                  </p>
                  {offLocationDelivery && (
                    <>
                      <p className="text-sm">
                        Delivery Location:{" "}
                        {deliveryDetails[parcel.id]?.location || "NIL"}
                      </p>
                      <p className="text-sm">
                        Contact Number:{" "}
                        {deliveryDetails[parcel.id]?.contact || "NIL"}
                      </p>
                    </>
                  )}
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
