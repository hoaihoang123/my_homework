import TaskList from "../components/TaskList";
import TaskFilter from "../components/TaskFilter";
import React from "react";
import Header from "../components/Header";

const Tasks = () => {
  const [priority, setPriority] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [search, setSearch] = React.useState("");
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
        />
      </section>
      {/* Tasks table */}
      <TaskList priorityy={priority} statuss={status} search={search} />
    </div>
  );
};

export default Tasks;
