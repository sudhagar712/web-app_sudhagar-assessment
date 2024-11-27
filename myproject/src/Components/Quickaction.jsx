import React from "react";


const Quickaction = () => {
    
  return (
    <div className=" w-[340px] md:w-[380px]   bg-white p-6 rounded-lg shadow-lg">
      {/* ....................................Title.................................................. */}
      <h2 className="text-lg  font-bold mb-4">Quick Actions</h2>
      <div className="flex justify-between items-center">
        <button className="text-gray-500 ">&lt;</button> 
        <div className="grid grid-cols-4 gap-5  ">
       
          <div className="flex flex-col items-center ">
            <div className="bg-[#F2F8DF] w-16 h-16 flex items-center justify-center rounded-lg">
              <span className="text-green-500 text-2xl">💵</span>{" "}
          
            </div>
            <p className="text-[10px] mt-2 text-center">Make Payment</p>
          </div>

        
          <div className="flex flex-col items-center">
            <div className="bg-[#F2F8DF] w-16 h-16 flex items-center justify-center rounded-lg">
              <span className="text-green-500 text-2xl">₹</span>{" "}
            </div>
            <p className="text-[10px] mt-2 text-center">Settlements</p>
          </div>

        
          <div className="flex flex-col items-center">
            <div className="bg-[#F2F8DF] w-16 h-16 flex items-center justify-center rounded-lg">
              <span className="text-green-500 text-2xl">⏱</span>{" "}
             
            </div>
            <p className="text-[10px] mt-2 text-center">Transaction History</p>
          </div>

         
          <div className="flex flex-col items-center">
            <div className="bg-[#F2F8DF] w-16 h-16 flex items-center justify-center rounded-lg">
              <span className="text-green-500 text-2xl">🎁</span>{" "}
           
            </div>
            <p className="text-[10px] mt-2 text-center">Gift Cards</p>
          </div>
        </div>
        <button className="text-gray-500 ">&gt;</button> 
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <span className="w-2 h-2 bg-black rounded-full mx-1"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full mx-1"></span>
      </div>
    </div>
  );
};

export default Quickaction;
