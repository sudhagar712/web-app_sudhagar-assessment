import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";

const MasterDashboard = () => {

     const [isSidebarOpen, setIsSidebarOpen] = useState(true);

       const toggleSidebar = () => {
         setIsSidebarOpen(!isSidebarOpen);
       };


  return (
    <div className="flex h-screen bg-gray-100">
      {/*............................................. Sidebar ...............................................*/}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    
        
      {/*............................................ Main Content............................................. */}
      <div
        className={`flex-1 p-6 transition-all ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
       
      </div>
    </div>
  );
};

export default MasterDashboard;
