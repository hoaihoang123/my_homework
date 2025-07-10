import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Input from "../../Form/ui/Input";
import Button from "../../Form/ui/Button";
import { createTask, updateTask } from "../service/task";

// Define the task data structure
interface TaskFormData {
  title: string;
  description: string;
  start_date: string;
  due_date: string;
  priority: "low" | "medium" | "high";
  status: "todo" | "in_progress" | "done";
  assignee_id: number;
}

interface TaskFormProps {
  mode: " create" | "edit";
  taskId?: number;
  initialData?: TaskFormData;
}

// Validation schema
const taskSchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  start_date: yup.string().required("Start date is required"),
  due_date: yup
    .string()
    .required("Due date is required")
    .test(
      "is-after-start",
      "Due date must be after start date",
      function (value) {
        const { start_date } = this.parent;
        return !start_date || !value || new Date(value) >= new Date(start_date);
      }
    ),
  priority: yup
    .string()
    .oneOf(["low", "medium", "high"], "Invalid priority")
    .required("Priority is required"),
  status: yup
    .string()
    .oneOf(["todo", "in_progress", "done"], "Invalid status")
    .required("Status is required"),
  assignee_id: yup
    .number()
    .typeError("Assignee must be a number")
    .positive("Assignee ID must be positive")
    .required("Assignee is required"),
});

const TaskForm: React.FC<TaskFormProps> = ({ mode, taskId, initialData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const isEditMode = mode === "edit";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TaskFormData>({
    resolver: yupResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      start_date: new Date().toISOString().split("T")[0],
      due_date: "",
      priority: "medium",
      status: "todo",
      assignee_id: 1,
    },
  });

  useEffect(() => {
    if (isEditMode && initialData) {
      const formatDate = (date: string) => {
        if (!date) return "";

        try {
          return new Date(date).toISOString().split("T")[0];
        } catch (err) {
          console.error("Error formatting date:", err);
          return "";
        }
      };

      setValue("title", initialData.title);
      setValue("description", initialData.description);
      setValue("start_date", formatDate(initialData.start_date));
      setValue("due_date", formatDate(initialData.due_date));
      setValue("priority", initialData.priority);
      setValue("status", initialData.status);
      setValue("assignee_id", initialData.assignee_id);
    }
  }, [isEditMode, initialData, setValue]);

  const onSubmit = async (data: TaskFormData) => {
    try {
      setIsSubmitting(true);

      const formattedData = {
        ...data,
        start_date: new Date(data.start_date).toISOString(),
        due_date: new Date(data.due_date).toISOString(),
      };
      console.log(
        `${isEditMode ? "Editing" : "Creating"} task:`,
        formattedData
      );

      let result;

      if (isEditMode && taskId) {
        console.log("Updating task:", formattedData);
        result = await updateTask(taskId, formattedData);
        console.log("Task updated successfully:", result);
        alert("Task updated successfully!");
      } else {
        result = await createTask(formattedData);
        console.log("Task created successfully:", result);
        alert("Task created successfully!");
      }
      if (result) {
        reset();
        navigate("/tasks");
      }
    } catch (error) {
      console.error("Failed to create task:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create New Task</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <Input
            type="text"
            placeholder="Task title"
            {...register("title")}
            className={errors.title ? "border-red-500" : ""}
          />
          <p className="mt-1 text-sm text-red-600">{errors.title?.message}</p>
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            placeholder="Task description"
            {...register("description")}
            className={`w-full px-3 py-2 border ${
              errors.description ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
          ></textarea>
          <p className="mt-1 text-sm text-red-600">
            {errors.description?.message}
          </p>
        </div>

        {/* Dates - Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Start Date */}
          <div>
            <label
              htmlFor="start_date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Start Date
            </label>
            <Input
              type="date"
              {...register("start_date")}
              className={errors.start_date ? "border-red-500" : ""}
            />
            <p className="mt-1 text-sm text-red-600">
              {errors.start_date?.message}
            </p>
          </div>

          {/* Due Date */}
          <div>
            <label
              htmlFor="due_date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Due Date
            </label>
            <Input
              type="date"
              {...register("due_date")}
              className={errors.due_date ? "border-red-500" : ""}
            />
            <p className="mt-1 text-sm text-red-600">
              {errors.due_date?.message}
            </p>
          </div>
        </div>

        {/* Priority and Status - Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Priority */}
          <div>
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Priority
            </label>
            <select
              id="priority"
              {...register("priority")}
              className={`w-full px-3 py-2 border ${
                errors.priority ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <p className="mt-1 text-sm text-red-600">
              {errors.priority?.message}
            </p>
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Status
            </label>
            <select
              id="status"
              {...register("status")}
              className={`w-full px-3 py-2 border ${
                errors.status ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            >
              <option value="to_do">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
              <option value="review">Review</option>
              <option value="blocked">Blocked</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <p className="mt-1 text-sm text-red-600">
              {errors.status?.message}
            </p>
          </div>
        </div>

        {/* Assignee */}
        <div>
          <label
            htmlFor="assignee_id"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Assignee ID
          </label>
          <Input
            type="number"
            placeholder="Assignee ID"
            {...register("assignee_id")}
            className={errors.assignee_id ? "border-red-500" : ""}
          />
          <p className="mt-1 text-sm text-red-600">
            {errors.assignee_id?.message}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Button
            type="submit"
            variant="blue"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting
              ? isEditMode
                ? "Updating..."
                : "Creatting"
              : isEditMode
              ? "Update Task"
              : " Create Task"}
          </Button>

          <Button type="button" variant="red" fullWidth>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
