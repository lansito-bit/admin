import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import PlaceholderPage from "./pages/PlaceholderPage";
import OverviewPage from "./pages/OverviewPage";
import PerformanceTracker from "./pages/PerformanceTracker";
import EnrollmentTracker from "./pages/EnrollmentTracker";
import AttendancePage from "./pages/AttendancePage";
import { navConfig } from "./config/links";

function App() {
  // Flatten internal (non-external) nav items into routes automatically,
  // so adding a new page in links.js is enough — no need to touch this file.
  const internalRoutes = navConfig.flatMap((group) =>
    group.items
      .filter((item) => item.path)
      .map((item) => ({
        path: item.path,
        section: group.section,
        label: item.label,
      }))
  );

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to={internalRoutes[0].path} replace />} />
        {internalRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path.slice(1)}
            element={
              route.path === "/overview" ? (
                <OverviewPage />
              ) : route.path === "/department/performance-tracker" ? (
                <PerformanceTracker />
              ) : route.path === "/department/enrollment-tracker" ? (
                <EnrollmentTracker />
              ) : route.path === "/faculty/attendance" ? (
                <AttendancePage />
              ) : (
                <PlaceholderPage section={route.section} title={route.label} />
              )
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
