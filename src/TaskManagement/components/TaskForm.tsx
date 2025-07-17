import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../Form/ui/Input";
import Button from "../../Form/ui/Button";
import { createTask, getTaskById, updateTask } from "../service/task";
import { notification } from "antd";

// Define the task data structure
interface TaskFormData {
  title: string;
  description: string;
  start_date: string;
  due_date: string;
  priority: "low" | "medium" | "high";
  status: "to_do" | "in_progress" | "done" | "review" | "blocked" | "cancelled";
  assignee_id: number;
}

interface TaskFormProps {
  isOpen?: boolean;
  onClose: () => void;
  mode: " create" | "edit";
  taskId?: number | null;
  onSuccess?: () => void;
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
    .oneOf(
      ["to_do", "in_progress", "done", "review", "blocked", "cancelled"],
      "Invalid status"
    )
    .required("Status is required"),
  assignee_id: yup
    .number()
    .typeError("Assignee must be a number")
    .positive("Assignee ID must be positive")
    .required("Assignee is required"),
});

const TaskForm: React.FC<TaskFormProps> = ({
  isOpen,
  onClose,
  mode,
  taskId,
  onSuccess,
}) => {
  const [initialData, setInitialData] = useState<TaskFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (
    type: "success" | "error",
    message: string,
    description: string
  ) => {
    api[type]({
      message,
      description,
      placement: "top",
      duration: 3, // Tự động đóng sau 3 giây
    });
  };

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
      status: "to_do",
      assignee_id: 1,
    },
  });

  useEffect(() => {
    const fetchTask = async () => {
      if (isEditMode && taskId) {
        try {
          const taskData = await getTaskById(taskId);
          setInitialData(taskData.data);
        } catch (error) {
          console.error("Failed to fetch task data:", error);
        }
      }
    };

    fetchTask();
  }, [isEditMode, taskId]);

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
      console.log("Setting initial data for edit mode:", initialData);

      setValue("title", initialData.title);
      setValue("description", initialData.description);
      setValue("start_date", formatDate(initialData.start_date));
      setValue("due_date", formatDate(initialData.due_date));
      setValue("priority", initialData.priority);
      setValue("status", initialData.status);
      setValue("assignee_id", initialData.assignee_id);
    }
  }, [isEditMode, initialData, setValue]);

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  const onSubmit = async (data: TaskFormData) => {
    try {
      setIsSubmitting(true);

      const formattedData = {
        ...data,
        start_date: new Date(data.start_date).toISOString(),
        due_date: new Date(data.due_date).toISOString(),
      };

      if (isEditMode && taskId) {
        await updateTask(taskId, formattedData);
        openNotification(
          "success",
          "Task Updated",
          "Your task has been updated successfully."
        );
      } else {
        await createTask(formattedData);
        openNotification(
          "success",
          "Task Created",
          "Your new task has been created successfully."
        );
      }

      if (onSuccess) {
        onSuccess();
      }
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error submitting task form:", error);

      openNotification(
        "error",
        `Failed to ${isEditMode ? "update" : "create"} task`,
        "An error occurred. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 bg-opacity-50">
      {contextHolder}

      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-xl mx-4 my-8 max-h-[90vh] overflow-y-auto">
        <div className="p-4">
          <h1 className="text-2xl font-bold">
            {isEditMode ? "Edit Task" : "Create New Task"}
          </h1>
        </div>

        <div className="p-6">
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
              <p className="mt-1 text-sm text-red-600">
                {errors.title?.message}
              </p>
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

              <Button type="button" variant="red" fullWidth onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
