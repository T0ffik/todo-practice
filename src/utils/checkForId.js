import _ from "lodash";

export const checkForId = (tasks) => {
  let id = _.uniqueId();
  tasks.forEach((task) => {
    if (task.id === id) {
      id = _.uniqueId();
    }
  });
  return id;
};
