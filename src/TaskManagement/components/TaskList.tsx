import type { Task } from "../../types";
import { format } from "date-fns";
import { PriorityBadge } from "../ui/priority-badge";
import { StatusBadge } from "../ui/status-badge";
import { useEffect, useState } from "react";
import { getTasks } from "../service/task";
import TaskForm from "./TaskForm";

// Helper function to format date
const formatDate = (dateString: string | null) => {
  if (!dateString) return "-";
  return format(new Date(dateString), "dd/MM/yyyy");
};

export default function TaskList({
  priorityy = "",
  statuss = "",
  search = "",
  refresh = 0,
}: {
  priorityy?: string;
  statuss?: string;
  search?: string;
  refresh?: number;
}) {
  const [task, setTasks] = useState<Task[]>([]);
  const [filterTasks, setFilterTasks] = useState<Task[]>([]);
  const [editModelOpem, setEditModelOpem] = useState(false);
  const [taskId, setTaskId] = useState<number | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      if (tasks) {
        setTasks(tasks);
        setFilterTasks(tasks);
      } else {
        console.error("Failed to fetch tasks");
      }
    };
    fetchTasks();
  }, [refresh]);

  useEffect(() => {
    console.log(
      "Filtering tasks with priority:",
      priorityy,
      "and status:",
      statuss,
      "and search:",
      search
    );
    let result = [...task];
    console.log("All tasks:", result);

    if (priorityy) {
      result = result.filter((task) => task.priority === priorityy);
    }

    if (statuss) {
      result = result.filter((task) => task.status === statuss);
    }

    if (search) {
      result = result.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterTasks(result);
    console.log("Filtered tasks:", result);
  }, [task, priorityy, statuss, search]);
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-6">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-6">
              ID
            </th>
            <th scope="col" className="py-3 px-6">
              Title
            </th>
            <th scope="col" className="py-3 px-6">
              Description
            </th>
            <th scope="col" className="py-3 px-6">
              Start Date
            </th>
            <th scope="col" className="py-3 px-6">
              Due Date
            </th>
            <th scope="col" className="py-3 px-6">
              Priority
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              Assignee ID
            </th>
            <th scope="col" className="py-3 px-6">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filterTasks.map((task) => (
            <tr key={task.id} className="bg-white border-b hover:bg-gray-50">
              <td className="py-4 px-6">{task.id}</td>
              <td className="py-4 px-6 font-medium text-gray-900">
                {task.title}
              </td>
              <td className="py-4 px-6">{task.description}</td>
              <td className="py-4 px-6">{formatDate(task.start_date)}</td>
              <td className="py-4 px-6">{formatDate(task.due_date)}</td>
              <td className="py-4 px-6">
                <PriorityBadge priority={task.priority} />
              </td>
              <td className="py-4 px-6">
                <StatusBadge status={task.status} />
              </td>
              <td className="py-4 px-6">{task.assignee_id}</td>
              <td className="py-4 px-6 flex items-center space-x-2">
                <button
                  className="font-medium text-blue-600 hover:underline"
                  onClick={() => {
                    setEditModelOpem(true);
                    setTaskId(task.id);
                  }}
                >
                  Edit
                </button>
                <button className="font-medium text-red-600 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TaskForm
        isOpen={editModelOpem}
        onClose={() => setEditModelOpem(false)}
        mode="edit"
        taskId={taskId}
        onSuccess={() => {
          const fetchTasks = async () => {
            try {
              const tasks = await getTasks();
              if (tasks) {
                setTasks(tasks);
                setFilterTasks(tasks);
              }
            } catch (error) {
              console.error("Failed to fetch tasks:", error);
            }
          };
          fetchTasks();
        }}
      />
    </div>
  );
}
