import React from "react";
import { useSelector } from "react-redux";
import EntryLanding from "../entity-landing";
import SuperAdminDashboard from "../super-admin";
import GoogleMap from "../google-map";

function Dashboard() {
  const { loginInfo } = useSelector((state) => state.rLogin);

  const renderDashboardbaseOnUserType = () => {
    if (loginInfo && loginInfo.user.type === "SuperAdmin") {
      return <SuperAdminDashboard />;
    } else if (loginInfo && loginInfo.user.type === "ClientAdmin") {
      return <EntryLanding />;
    } else if (loginInfo && loginInfo.user.type === "Customer") {
      return <GoogleMap />;
    }
  };

  return <div className="div-dashboard">{renderDashboardbaseOnUserType}</div>;
}

export default Dashboard;



// import React from "react";
// import { useSelector } from "react-redux";
// import EntryLanding from "../entity-landing";
// import SuperAdminDashboard from "../super-admin";
// import GoogleMap from "../google-map";

// function Dashboard() {
//   // const { loginInfo } = useSelector((state) => state.rLogin);

//   // const renderDashboardbaseOnUserType = () => {
//   //   if (loginInfo && loginInfo.user.type === "SuperAdmin") {
//   //     return <SuperAdminDashboard />;
//   //   } else if (loginInfo && loginInfo.user.type === "ClientAdmin") {
//   //     return <EntryLanding />;
//   //   } else if (loginInfo && loginInfo.user.type === "Customer") {
//   //     return <GoogleMap />;
//   //   }
//   // };

//   return <div className="div-dashboard">{renderDashboardbaseOnUserType()}</div>;
// }

// export default Dashboard;
