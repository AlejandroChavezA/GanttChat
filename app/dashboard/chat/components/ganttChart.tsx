"use client";
import {
  Gantt,
  Task,
  EventOption,
  StylingOption,
  ViewMode,
  DisplayOption,
} from "gantt-task-react";
import "gantt-task-react/dist/index.css";

const GanttChart = () => {
  let tasks: Task[] = [
    {
      start: new Date(2020, 1, 1),
      end: new Date(2020, 1, 2),
      name: "Idea",
      id: "Task 0",
      type: "task",
      progress: 45,
      isDisabled: true,
      styles: { progressColor: "red", progressSelectedColor: "#ff9e0d" },
      // dependencies: ["Task 1"],
    },
    {
      start: new Date(2020, 1, 1),
      end: new Date(2020, 2, 2),
      name: "Idea 2",
      id: "Task 1",
      type: "task",
      progress: 45,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
  ];

  const stylingOption: StylingOption = {};
  return <Gantt tasks={tasks} {...stylingOption} />;
};

export default GanttChart;
