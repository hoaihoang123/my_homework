import { apiBaseUrl, defaultHeaders } from "../constants";

export const getTasks = async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/workspaces/tasks`, {
      method: "GET",
      headers: defaultHeaders,
    });
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const createTask = async (taskData: Record<string, any>) => {
  try {
    const response = await fetch(`${apiBaseUrl}/workspaces/tasks`, {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(taskData),
    });
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const updateTask = async (
  taskId: number,
  taskData: Record<string, any>
) => {
  try {
    const response = await fetch(`${apiBaseUrl}/workspaces/tasks/${taskId}`, {
      method: "PATCH",
      headers: defaultHeaders,
      body: JSON.stringify(taskData),
    });
    if (!response.ok) {
      throw new Error("Failed to update task");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (taskId: number) => {
  try {
    const response = await fetch(`${apiBaseUrl}/workspaces/tasks/${taskId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
    return true;
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export const getTaskById = async (taskId: number) => {
  try {
    const response = await fetch(`${apiBaseUrl}/workspaces/tasks/${taskId}`, {
      method: "GET",
      headers: defaultHeaders,
    });
    if (!response.ok) {
      throw new Error("Failed to fetch task");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching task:", error);
    throw error;
  }
};

export const getTasksByUserId = async (userId: number) => {
  try {
    const response = await fetch(
      `${apiBaseUrl}/workspaces/tasks?userId=${userId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch task");
    }
    const data = await response.json();
    return data.task;
  } catch (error) {
    console.error("Error fetching task:", error);
    throw error;
  }
};
