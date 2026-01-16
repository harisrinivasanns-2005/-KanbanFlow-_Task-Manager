import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { TaskColumn } from "@/components/TaskColumn";
import { AddTaskDialog } from "@/components/AddTaskDialog";
import { Task } from "@/types/task";
import { api } from "@/lib/api";

export function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    api.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  const handleAddTask = (task: Task) => {
    api.post("/tasks", task).then((res) => {
      setTasks((prev) => [...prev, res.data]);
    });
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const taskId = result.draggableId;
    const newStatus = result.destination.droppableId as Task["status"];

    const task = tasks.find((t) => t.id === taskId);
    if (!task || task.status === newStatus) return;

    const updatedTask = { ...task, status: newStatus };

    api.put(`/tasks/${task.id}`, updatedTask).then(() => {
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? updatedTask : t))
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="p-6">
        <AddTaskDialog onAdd={handleAddTask} />

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="mt-6 flex gap-6">
            <TaskColumn title="To Do" status="todo" color="yellow" tasks={tasks} />
            <TaskColumn title="In Progress" status="in-progress" color="blue" tasks={tasks} />
            <TaskColumn title="Done" status="done" color="green" tasks={tasks} />
          </div>
        </DragDropContext>
      </main>
    </div>
  );
}
