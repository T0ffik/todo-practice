import React from "react";
import { AddTaskForm } from "../components/AddTaskForm/AddTaskForm";
import { Header } from "../components/Header/Header";
import { TaskList } from "../components/TaskList/TaskList";

export const Main = () => {
  return (
    <div>
      <Header />
      <TaskList />
      <AddTaskForm />
    </div>
  );
};
