import { createTask, updateTaskById } from "@/api/endpoint";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const CreateTaskForm = (props) => {
  const { toggle, setToggle, refreshTask, updateTaskId, tasks } = props;

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (updateTaskId) {
      const taskToEdit = tasks.find((t) => t._id === updateTaskId);

      if (taskToEdit) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTask({
          title: taskToEdit.title,
          description: taskToEdit.description,
          status: taskToEdit.status,
        });
      }
    }
  }, [updateTaskId, tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (updateTaskId) {
        await updateTaskById(updateTaskId, task);
        toast.success("Task Updated");
      } else {
        await createTask(task);
        toast.success("Task create...");
      }

      setTask({ title: "", description: "", status: "" });

      setToggle(false);

      await refreshTask();
    } catch (error) {
      toast.error(error.message);
      console.log("Error : ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${toggle ? "w-2xs transform transition-all duration-1000" : "w-0 transform transition-all duration-75"} min-h-screen bg-zinc-800 shadow-md absolute right-0 top-0 flex items-center flex-col pt-10 px-10 z-10`}
    >
      <p className="text-2xl font-bold">Create Tasks</p>
      <form
        onSubmit={handleTaskSubmit}
        className="flex flex-col items-center gap-3"
      >
        <Input
          type="text"
          onChange={handleChange}
          name="title"
          value={task.title}
          placeholder={"Enter title*"}
        />
        <Input
          type="text"
          onChange={handleChange}
          name="description"
          value={task.description}
          placeholder={"Enter description*"}
        />
        <select
          className="border border-white rounded-md w-60 py-1"
          name="status"
          value={task.status}
          onChange={handleChange}
        >
          <option className="text-black bg-white" value={"pending"}>
            Pending
          </option>
          <option className="text-black bg-white" value={"in-progress"}>
            In-Progress
          </option>
          <option className="text-black bg-white" value={"completed"}>
            Completed
          </option>
        </select>

        <Button type="submit" variant="outline" className={"text-black"}>
          {loading ? "Processing..." : updateTaskId ? "Update" : "Create"}
        </Button>
      </form>
      <Button
        variant="outline"
        onClick={() => setToggle(false)}
        className={"absolute top-1 left-2 md:hidden text-black rounded-full"}
      >
        X
      </Button>
    </div>
  );
};

export default CreateTaskForm;
