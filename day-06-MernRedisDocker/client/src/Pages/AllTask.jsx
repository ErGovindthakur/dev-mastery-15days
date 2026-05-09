import { deleteTaskById, getAllTasks } from "@/api/endpoint";
import { Button } from "@/components/ui/button";
import CreateTaskForm from "@/Task/CreateTaskForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);
  const [updateTask, setUpdateTask] = useState();
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
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

  const toggleTaskForm = () => {
    setToggle((prev) => {
      return !prev;
    });
    setUpdateTask(null);
  };

  const handleEditClick = (id) => {
    setUpdateTask(id);
    setToggle(true);
  };

  const handleDeleteClick = async (id) => {
    console.log("Task to Delete : ", id);
    try {
      setLoading(true);
      await deleteTaskById(id);
      toast.success("Task deleted");
      await getAllTodos();
    } catch (error) {
      console.log(error.message || "Failed to delete task");
      toast.error(error.message || "Failed to delete task");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h3 className="text-white">Loading...</h3>;

  return (
    <div className="text-white w-full min-h-screen px-10">
      <Button
        variant="outline"
        className={"text-black relative left-3.5 top-3.5 my-5"}
        onClick={toggleTaskForm}
      >
        {toggle ? "close Form" : "Add Task"}
      </Button>
      {toggle && (
        <CreateTaskForm
          toggle={toggle}
          setToggle={setToggle}
          refreshTask={getAllTodos}
          updateTaskId={updateTask}
          tasks={tasks}
        />
      )}
        {tasks.length === 0 ? (
        <h3 className="text-white mt-10">No tasks found! Create one to get started.</h3>
      ) : (
      <div className="w-full flex justify-center gap-x-5 gap-y-2 flex-wrap">
        {tasks.map((task) => {
          return (
            <div
              key={task._id}
              className="bg-zinc-800 shadow-md shadow-mauve-500 rounded-md w-64 px-2 py-3 hover:transform hover:scale-105 mt-5"
            >
              <h2 className="text-lg">{task.title}</h2>
              <p className="text-gray-500 text-sm">
                {(task.description || "").slice(0, 36)}...
              </p>
              <p
                className={`${task.status === "pending" ? "text-red-600 text-sm bg-red-300 rounded-full px-1 py-1" : task.status === "completed" ? "text-green-600 text-sm bg-green-300 rounded-full px-1 py-1" : "text-yellow-600 text-sm bg-yellow-300 rounded-full px-1 py-1"} flex justify-center`}
              >
                {task.status}
              </p>

              <div className="my-2">
                <Button
                  className={"text-white bg-green-500 mr-2"}
                  onClick={() => handleEditClick(task._id)}
                >
                  Update
                </Button>
                <Button
                  className={"text-white bg-red-500"}
                  onClick={() => handleDeleteClick(task._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
};

export default AllTask;
