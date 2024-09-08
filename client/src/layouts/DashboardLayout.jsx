import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen md:flex relative">
      {/* Sidebar */}
      <div className="border-4 border-red-400">
        <Sidebar />
      </div>
      {/* Outle ---> Dynamic outlet */}
      <div className="border-4 border-green-400 flex-1 md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
