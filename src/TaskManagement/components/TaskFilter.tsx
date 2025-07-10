import React, { type ChangeEvent } from "react";
import { NavLink } from "react-router-dom";

interface TaskFilterProps {
  onPrioritySelected: (priority: string) => void;
  onStatusSelected: (status: string) => void;
  onSearchChange?: (searchTerm: string) => void;
}
const TaskFilter = ({
  onPrioritySelected,
  onStatusSelected,
  onSearchChange,
}: TaskFilterProps) => {
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

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Task Management</h1>
        <NavLink
          to="/tasks/create-task"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create Task
        </NavLink>
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
    </div>
  );
};

export default TaskFilter;
