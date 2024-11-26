import React from 'react'

const MyOrder = () => {
  return (
    <div className="p-10  max-w-md mx-auto bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xs font-bold text-gray-800">
          Order Id: <span className="text-green-600">12345</span>
        </h2>
        <p className="text-gray-500 text-sm">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date: Apr 09, 2024
        </p>
      </div>
      <div className="border-t pt-2">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Order for:</h3>
        <div className="flex items-center mb-2">
          <p className="text-gray-800 font-medium">Rajesh Kannan</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>📞</span>
          <a href="tel:+918526547512" className="text-blue-500 hover:underline">
            +91 8526547512
          </a>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
          <span>📍</span>
          <p>R S Puram, Coimbatore</p>
        </div>
      </div>
      <div className="border-t pt-2 mt-2">
        <h4 className="text-sm font-semibold text-gray-700 mb-1">
          Order Items:
        </h4>
        <ul className="text-sm text-gray-600">
          <li>1 x Ooty apple - ₹100.00</li>
          <li>5 x White Egg - ₹50.00</li>
        </ul>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-sm font-semibold">Total Bill Amount:</p>
          <p className="text-sm text-gray-800">₹150.00</p>
        </div>
        <div className="mt-1">
          <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
            PAID - UPI
          </span>
        </div>
      </div>
      <div className="border-t pt-4 mt-4 flex space-x-4">
        <div className=" rounded-md bg-gradient-to-r from-[#668D12] to-[#ACC43F] p-[1px]">
          <button className="w-full bg-white text-[#668D12] font-semibold py-2 px-4 rounded-md ">
            Reject Order
          </button>
        </div>
        <button className="flex-grow py-2 text-center bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white rounded-md">
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default MyOrder
