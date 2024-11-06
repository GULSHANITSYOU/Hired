import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/applayout";
import LandinPage from "./pages/landingpage";
import Onboarding from "./pages/Onboarding";
import JobListings from "./pages/job-listing";
import Jobs from "./pages/job";
import PostJobs from "./pages/post-jobs";
import SavedJobs from "./pages/saved-jobs";
import Myjobs from "./pages/myjobs";
import "./app.css";
import { ThemeProvider } from "./components/ui/theme-provider";


const route = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandinPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <JobListings />,
      },
      {
        path: "/job/:id",
        element: <Jobs />,
      },
      {
        path: "/post-jobs",
        element: <PostJobs />,
      },
      {
        path: "/saved-jobs",
        element: <SavedJobs />,
      },
      {
        path: "/my-jobs",
        element: <Myjobs />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={route} />
    </ThemeProvider>
  );
}

export default App;
