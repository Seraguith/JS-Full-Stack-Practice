import { questStructurer } from './../quest/questStructurer.js';

const taskRenderer = (() => {
    const render = (task) => {
        // early version of render()
        let newTask = document.createElement("div");

        let taskTitle = document.createElement("div");
        taskTitle.textContent = task.getTitle();

        let taskDescription = document.createElement("div");
        taskDescription.textContent = task.getDescription();

        let taskDueDate = document.createElement("div");
        taskDueDate.textContent = task.getDueDate();

        let taskPriority = document.createElement("div");
        taskPriority.textContent = task.getPriority();

        newTask.appendChild(taskTitle);
        newTask.appendChild(taskDescription);
        newTask.appendChild(taskDueDate);
        newTask.appendChild(taskPriority);

        return newTask;
    }
    const createDeleteButton = (i) => {

    }

    return {
        render
    }
})();

export { taskRenderer }