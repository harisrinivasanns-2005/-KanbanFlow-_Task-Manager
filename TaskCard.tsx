import { Task } from "@/types/task";
import { Draggable } from "@hello-pangea/dnd";

interface Props {
  task: Task;
  index: number;
}

export function TaskCard({ task, index }: Props) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="rounded-xl bg-white p-4 shadow-sm"
        >
          <h3 className="font-semibold">{task.title}</h3>
          <p className="text-sm text-gray-600">{task.description}</p>
        </div>
      )}
    </Draggable>
  );
}
