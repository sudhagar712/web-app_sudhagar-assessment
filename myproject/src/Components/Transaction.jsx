import React, { useState } from "react";
import { IoMdRefresh } from "react-icons/io";

const Transaction = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

 
  const transactions = [
    {
      id: 1,
      type: "Send a Payment",
      phone: "+918956598562",
      paidOn: "Apr 11, 2024 at 4:30PM",
      via: "Paid via QR Scan",
      amount: "+₹500.00",
      isPositive: true,
    },
    {
      id: 2,
      type: "Send a Payment",
      phone: "+918956598562",
      paidOn: "Apr 11, 2024 at 4:30PM",
      via: "Paid via QR Scan",
      amount: "+₹400.00",
      isPositive: true,
    },
    {
      id: 3,
      type: "Send a Payment",
      phone: "+918956598562",
      paidOn: "Apr 11, 2024 at 4:30PM",
      via: "Paid via QR Scan",
      amount: "+₹300.00",
      isPositive: true,
    },
    {
      id: 4,
      type: "Send a Payment",
      phone: "+918956598562",
      paidOn: "Apr 11, 2024 at 4:30PM",
      via: "Paid via QR Scan",
      amount: "+₹200.00",
      isPositive: true,
    },
  ];

  const settlements = [
    {
      id: 1,
      description: "Weekly Settlements (10 Apr - 17 Apr)",
      paidOn: "Apr 11, 2024 at 4:30PM",
      via: "REWARDIFY (weekly Settlement)",
      amount: "-₹3326.00",
      isPositive: false,
      status: "Paid",
      view: "View",
    },
    {
      id: 2,
      description: "Weekly Settlements (10 Apr - 17 Apr)",
      paidOn: "Apr 11, 2024 at 4:30PM",
      via: "REWARDIFY (weekly Settlement)",
      amount: "-₹3326.00",
      isPositive: false,
      status: "Paid",
      view: "View",
    },
    {
      id: 3,
      description: "Weekly Settlements (10 Apr - 17 Apr)",
      paidOn: "Apr 11, 2024 at 4:30PM",
      via: "REWARDIFY (weekly Settlement)",
      amount: "-₹3326.00",
      isPositive: false,
      status: "Paid",
      view: "View",
    },
    {
      id: 4,
      description: "Weekly Settlements (10 Apr - 17 Apr)",
      paidOn: "Apr 11, 2024 at 4:30PM",
      via: "REWARDIFY (weekly Settlement)",
      amount: "-₹3326.00",
      isPositive: false,
      status: "Paid",
      view: "View",
    },
    {
      id: 5,
      description: "Weekly Settlements (10 Apr - 17 Apr)",
      paidOn: "Apr 11, 2024 at 4:30PM",
      via: "REWARDIFY (weekly Settlement)",
      amount: "-₹3326.00",
      isPositive: false,
      status: "Paid",
      view: "View",
    },
  ];

  return (
    <div className="mt-5 w-[340px] md:w-[380px]">
      <div className="bg-white rounded-md p-5">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Recent Transaction</h1>
          <IoMdRefresh className="text-xl" />
        </div>
        <p className="text-[10px] text-gray-400">
          Last Update at: June 02, 2024 | 11:25 PM
        </p>
        <div className="w-full mt-9">
          <div className="flex space-x-9 border-b border-gray-200">
            <button
              className={`tab-button ${activeTab === "tab1" ? "active" : ""}`}
              onClick={() => handleTabClick("tab1")}
            >
              All Transaction
            </button>
            <button
              className={`tab-button ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => handleTabClick("tab2")}
            >
              Settlement
            </button>
          </div>
          {/* tab content 1 ---------------map */}
          <div className="tab-content">
            {activeTab === "tab1" && (
              <div className="p-0">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center mt-3 justify-between bg-white shadow-md rounded-lg p-4 max-w-md mx-auto"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F2F8DF] rounded-full flex items-center justify-center">
                        <span className="text-gray-500 text-xl">👤</span>
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-[10px]">
                          {transaction.phone}{" "}
                          <span className="text-gray-500 text-[10px]">
                            {transaction.type}
                          </span>
                        </p>
                        <p className="text-gray-500 text-[10px] mt-1">
                          Paid on {transaction.paidOn}
                        </p>
                        <span className="inline-block bg-[#F2F8DF] text-gray-700 text-xs font-medium mt-2 px-2 py-1 rounded">
                          {transaction.via}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`font-medium text-[9px] ${
                        transaction.isPositive
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.amount}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* tab content 2 ---------------map */}
            {activeTab === "tab2" && (
              <div className="p-0">
                {settlements.map((settlement) => (
                  <div
                    key={settlement.id}
                    className="flex mb-4 mt-3  items-center justify-between bg-white shadow-md rounded-lg p-4 max-w-md mx-auto"
                  >
                    <div className="flex  items-center gap-4">
                      <div className="w-12 h-12 bg-[#F2F8DF] rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xl">🔗</span>
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-[10px]">
                          {settlement.description}
                        </p>
                        <p className="text-gray-500 text-[10px] mt-1">
                          Paid on {settlement.paidOn}
                        </p>
                        <span className="inline-block bg-[#F2F8DF] text-gray-700 text-[10px] font-medium mt-2 px-2 py-1 rounded">
                          {settlement.via}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div
                        className={`font-medium text-[9px] ${
                          settlement.isPositive
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {settlement.amount}
                      </div>
                      <div className="flex gap-2 mt-1">
                        <span className="text-green-600 text-[10px] font-medium">
                          {settlement.status}
                        </span>
                        <span className="text-red-600 text-[10px] font-medium cursor-pointer">
                          {settlement.view}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
