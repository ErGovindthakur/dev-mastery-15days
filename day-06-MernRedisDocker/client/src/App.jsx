import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignUp } from "./Auth/SignUp";
import { Login } from "./Auth/Login";
import { Toaster } from "@/components/ui/sonner";
import AllTask from "./Pages/AllTask";
import ProtectedRoute from "./Auth/ProtectedRoute";
import { Navbar } from "./Shared/Navbar";

// 1. Define routes as a simple array of objects
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/tasks",
    element: (
      <ProtectedRoute>
        <div className="min-h-screen bg-zinc-900">
          <Navbar />
          <AllTask />
        </div>
      </ProtectedRoute>
    ),
  },
]);

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 ">
      <Toaster position="top-right" richColors />

      <RouterProvider router={router} />
    </div>
  );
};

export default App;
