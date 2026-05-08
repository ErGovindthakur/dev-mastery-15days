// components/Navbar.jsx
import { Button } from "@/components/ui/button";
import { logoutUser } from "@/api/endpoint"; // Create this in your endpoint.js
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logged out!");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed",error.message);
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-zinc-950 border-b border-zinc-800 text-white">
      <h1 className="text-2xl font-bold text-white">Taskify</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-zinc-400">Profile</span>
        <Button variant="destructive" size="sm" onClick={handleLogout}>Logout</Button>
      </div>
    </nav>
  );
};
