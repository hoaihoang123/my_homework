import api from "../../AuthLorin/service/api";

export const getTasks = async () => {
  try {
    const response = await api.get(`/workspaces/tasks`);
    if (!response.data) {
      throw new Error("Failed to fetch tasks");
    }
    return {
      success: true,
      data: response.data || [],
    };
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const createTask = async (taskData: Record<string, any>) => {
  try {
    const response = await api.post(`/workspaces/tasks`, taskData);
    if (!response.data) {
      throw new Error("Failed to create task");
    }
    return {
      success: true,
      data: response.data,
    };
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
    const response = await api.patch(`/workspaces/tasks/${taskId}`, taskData);
    if (!response.data) {
      throw new Error("Failed to update task");
    }
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (taskId: number) => {
  try {
    const response = await api.delete(`/workspaces/tasks/${taskId}`);
    if (!response.data) {
      throw new Error("Failed to delete task");
    }
    return {
      success: true,
    };
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export const getTaskById = async (taskId: number) => {
  try {
    const response = await api.get(`/workspaces/tasks/${taskId}`);
    if (!response.data) {
      throw new Error("Failed to fetch task");
    }
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error fetching task:", error);
    throw error;
  }
};

export const getTasksByUserId = async (userId: number) => {
  try {
    const response = await api.get(`/workspaces/tasks?userId=${userId}`);
    if (!response.data) {
      throw new Error("Failed to fetch task");
    }
    return {
      success: true,
      data: response.data.task,
    };
  } catch (error) {
    console.error("Error fetching task:", error);
    throw error;
  }
};
