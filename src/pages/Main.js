import React from "react";
import { Header } from "../components/Header/Header";
import { Input } from "../components/Input/Input";
import { TaskList } from "../components/TaskList/TaskList";

export const Main = () => {
  return (
    <div>
      <Header />
      <Input placeholder="xd" />
      <TaskList />
    </div>
  );
};
