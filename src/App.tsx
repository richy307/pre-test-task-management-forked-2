import React from "react";
import { TaskProvider } from "./context/TaskContext";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Task Management App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
