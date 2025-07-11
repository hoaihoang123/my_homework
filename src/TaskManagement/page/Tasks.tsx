import TaskList from "../components/TaskList";
import TaskFilter from "../components/TaskFilter";
import React from "react";
import Header from "../components/Header";

const Tasks = () => {
  const [priority, setPriority] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [refreshData, setRefreshData] = React.useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <Header />
      {/* Tasks filter */}
      <section className=" mb-6">
        <TaskFilter
          onPrioritySelected={(priority) => setPriority(priority)}
          onStatusSelected={(status) => setStatus(status)}
          onSearchChange={(searchTerm) => setSearch(searchTerm)}
          onTaskCreeted={() => setRefreshData((prev) => prev + 1)}
        />
      </section>
      {/* Tasks table */}
      <TaskList
        priorityy={priority}
        statuss={status}
        search={search}
        refresh={refreshData}
      />
    </div>
  );
};

export default Tasks;
