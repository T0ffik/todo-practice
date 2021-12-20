import React, { useCallback, useMemo, useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "./AddTaskForm.scss";
import { StorageManager } from "../../utils/storageManager";
import { checkForId } from "../../utils/checkForId";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export const AddTaskForm = () => {
  const [inputValue, setInputValue] = useState({
    value: "",
    touched: false,
  });
  const [error, setError] = useState(false);

  const onChange = useCallback((e) => {
    setError(false);
    setInputValue({
      value: e.target.value,
      touched: true,
    });
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (inputValue.value.length === 0) {
        setError(true);
        return;
      }
      setError(false);
      const tasks = StorageManager.getItem("tasks") || [];
      const id = checkForId(tasks);
      StorageManager.setItem("tasks", [
        ...tasks,
        { id, value: inputValue.value },
      ]);
    },
    [inputValue]
  );

  const isInputValid = useMemo(
    () => (inputValue.value.length === 0 && inputValue.touched) || error,
    [error, inputValue.touched, inputValue.value.length]
  );

  return (
    <form onSubmit={onSubmit} className="addTaskForm">
      <div className="addTaskForm__inputCon">
        <Input
          value={inputValue.value}
          onChange={onChange}
          placeholder="Task name..."
        />
        <ErrorMessage isError={!isInputValid}>
          Field can't be empty
        </ErrorMessage>
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
};
