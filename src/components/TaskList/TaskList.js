import React, { useCallback } from "react";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import "./TaskList.scss";

export const TaskList = () => {
  const onButtonClick = useCallback(() => {
    console.log("BtnClicked");
  }, []);

  return (
    <main className="main">
      <Title>Tasks</Title>
      <Button onClick={onButtonClick}>Add</Button>
    </main>
  );
};
