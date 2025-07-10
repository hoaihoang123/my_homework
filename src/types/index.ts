export interface Role {
  id: number;
  name: string;
}

export interface User {
  email: string;
  access_token: string;
  role: Role[];
}

export interface Task {
  id: number;
  created_time: string;
  updated_time: string;
  deleted_time: string | null;
  created_by: number;
  updated_by: number;
  deleted_by: number | null;
  title: string;
  description: string;
  start_date: string;
  due_date: string;
  completed_date: string | null;
  priority: "low" | "medium" | "high";
  status: "todo" | "in_progress" | "review" | "done";
  assignee_id: number;
  parent_id: number | null;
  project_id: number | null;
}

export interface AuthContextType {
  user: User | null;
  setUser: (User: User | null) => void;
  isAuthenticated: boolean;
  logout: () => void;
}
