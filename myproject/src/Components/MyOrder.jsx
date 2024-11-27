import React from "react";
import { IoMdRefresh } from "react-icons/io";

const MyOrder = () => {
  const orders = [
    {
      id: "12345",
      date: "Apr 09, 2024",
      customer: {
        name: "Rajesh Kannan",
        phone: "+91 8526547512",
        address: "R S Puram, Coimbatore",
      },
      items: [
        { name: "Ooty apple", quantity: 1, price: 100 },
        { name: "White Egg", quantity: 5, price: 50 },
      ],
      total: 150,
      paymentStatus: "PAID - UPI",
    },
   
  ];

  return (
    <div className="p-10 w-full max-w-md mx-auto bg-white shadow-md rounded-md">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">My Orders</h1>
        <IoMdRefresh className="text-xl" />
      </div>
      <p className="text-[12px] text-gray-400 mb-4">
        Last Update at: June 02, 2024 | 11:25 PM
      </p>

      {orders.map((order) => (
        <div key={order.id} className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xs font-bold text-gray-800">
              Order Id: <span className="text-green-600">{order.id}</span>
            </h2>
            <p className="text-gray-500 text-sm">Date: {order.date}</p>
          </div>
          <div className="border-t pt-2">
            <h3 className="text-sm font-semibold text-gray-700 mb-1">
              Order for:
            </h3>
            <div className="flex items-center mb-2">
              <p className="text-gray-800 font-medium">{order.customer.name}</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="bg-[#F2F8DF] p-1 rounded-full">📞</span>
              <a
                href={`tel:${order.customer.phone}`}
                className="text-blue-500 hover:underline"
              >
                {order.customer.phone}
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
              <span className="bg-[#F2F8DF] p-1 rounded-full">📍</span>
              <p>{order.customer.address}</p>
            </div>
          </div>
          <div className="border-t pt-2 mt-2">
            <h4 className="text-sm font-semibold text-gray-700 mb-1">
              Order Items:
            </h4>
            <ul className="text-sm text-gray-600">
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.quantity} x {item.name} - ₹{item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <div className="mt-2 flex justify-between items-center">
              <p className="text-sm font-semibold">Total Bill Amount:</p>
              <p className="text-sm text-gray-800">₹{order.total.toFixed(2)}</p>
            </div>
            <div className="mt-1">
              <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                {order.paymentStatus}
              </span>
            </div>
          </div>
          <div className="border-t pt-4 mt-4 flex space-x-4">
            <div className="rounded-md bg-gradient-to-r from-[#668D12] to-[#ACC43F] p-[1px]">
              <button className="w-full bg-white text-[#668D12] font-semibold py-2 px-4 rounded-md">
                Reject Order
              </button>
            </div>
            <button className="flex-grow py-2 text-center bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white rounded-md">
              Confirm Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
