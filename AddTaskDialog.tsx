import { useState, ChangeEvent } from "react";
import { Task } from "@/types/task";

interface Props {
  onAdd: (task: Task) => void;
}

export function AddTaskDialog({ onAdd }: Props) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleAdd = () => {
    if (!title.trim()) return;

    onAdd({
      id: Date.now().toString(), // ✅ safer than crypto.randomUUID
      title,
      description,
      status: "todo",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    setTitle("");
    setDescription("");
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="border rounded px-2 py-1"
        placeholder="Task title"
        value={title}
        onChange={handleTitleChange}
      />

      <input
        type="text"
        className="border rounded px-2 py-1"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />

      <button
        type="button"
        onClick={handleAdd}
        className="rounded bg-primary px-3 py-1 text-primary-foreground"
      >
        Add
      </button>
    </div>
  );
}
