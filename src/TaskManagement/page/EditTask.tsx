import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTaskById } from "../service/task";
import TaskForm from "../components/TaskForm";

const EditTask = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const [task, setTask] = useState(null);
  const [laoding, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        setLoading(true);
        if (!taskId) {
          throw new Error("Task Id is required");
        }

        const taskData = await getTaskById(parseInt(taskId));

        if (!taskData) {
          throw new Error("Task not found");
        }

        setTask(taskData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTask();
  }, [taskId]);

  if (laoding) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !task) {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rouded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
        <p className="mb-4">{error || "Task not found"}</p>
        <button
          onClick={() => navigate("/tasks")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Back to Tasks
        </button>
      </div>
    );
  }

  return <TaskForm mode="edit" taskId={parseInt(taskId!)} initialData={task} />;
};

export default EditTask;
