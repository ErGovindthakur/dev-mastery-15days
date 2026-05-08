import { getAllTasks } from "@/api/endpoint";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getAllTodos = async () => {
    try {
      setLoading(true);
      const res = await getAllTasks();
      setTasks(res.data.data);
    } catch (error) {
      const status = error.response?.status; // Axios puts status here

      if (status === 401) {
        toast.error("Session expired, please login again");
        navigate("/login");
      } else {
        toast.error(error.response?.data?.message || "Failed to load tasks");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getAllTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <h3 className="text-white">Loading...</h3>;
  if (tasks.length === 0)
    return <h3 className="text-white">No tasks found!</h3>;

  console.log("Tasks : ", tasks);

  return (
    <div className="text-white w-full h-screen">
      <div className="w-full flex container mx-auto justify-center gap-5">
        {tasks.map((task) => {
          return (
            <div
              key={task._id}
              className="bg-zinc-800 shadow-md shadow-mauve-500 rounded-md w-64 px-2 py-3 hover:transform hover:scale-105 mt-5"
            >
              <h2 className="text-lg">{task.title}</h2>
              <p className="text-gray-500 text-sm">
                {task.description.slice(0, 60)}...
              </p>
              <p
                className={`${task.status === "pending" ? "text-red-600 text-sm bg-red-300 rounded-full px-1 py-1" : task.status === "completed" ? "text-green-600 text-sm bg-green-300 rounded-full px-1 py-1" : "text-yellow-600 text-sm bg-yellow-300 rounded-full px-1 py-1"} flex justify-center`}
              >
                {task.status}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
