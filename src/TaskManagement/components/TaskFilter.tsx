import React, { useState, type ChangeEvent } from "react";
import TaskForm from "./TaskForm";

interface TaskFilterProps {
  onPrioritySelected: (priority: string) => void;
  onStatusSelected: (status: string) => void;
  onSearchChange?: (searchTerm: string) => void;
  onTaskCreeted: () => void;
}
const TaskFilter = ({
  onPrioritySelected,
  onStatusSelected,
  onSearchChange,
  onTaskCreeted,
}: TaskFilterProps) => {
  const [modalOpen, setIsModalOpen] = useState(false);
  const handlePriorityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onPrioritySelected(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusSelected(event.target.value);
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };

  const handleTaskSuccess = () => {
    if (onTaskCreeted) {
      onTaskCreeted();
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Create Task
        </button>
      </div>

      {/* Search and filters could go here */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full py-2 pl-10 pr-4 border rounded-lg"
            onChange={handleChangeSearch}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex space-x-2">
          <select
            className="border rounded-lg px-4 py-2"
            onChange={handlePriorityChange}
          >
            <option value="">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <select
            className="border rounded-lg px-4 py-2"
            onChange={handleStatusChange}
          >
            <option value="">All Statuses</option>
            <option value="to_do">Todo</option>
            <option value="in_progress">In Progress</option>
            <option value="review">Review</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>
      <TaskForm
        mode=" create"
        isOpen={modalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleTaskSuccess}
      />
    </div>
  );
};

export default TaskFilter;
