import { Task, TaskStatus } from "@/types/task";
import { Droppable } from "@hello-pangea/dnd";
import { TaskCard } from "./TaskCard";

interface Props {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  color: "yellow" | "blue" | "green";
}

const bgMap = {
  yellow: "bg-yellow-50",
  blue: "bg-blue-50",
  green: "bg-green-50",
};

export function TaskColumn({ title, status, tasks, color }: Props) {
  const filtered = tasks.filter((t) => t.status === status);

  return (
    <div className={`flex-1 rounded-xl p-4 ${bgMap[color]}`}>
      <h2 className="mb-4 font-semibold">{title}</h2>

      <Droppable droppableId={status}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-4 min-h-[100px]"
          >
            {filtered.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
