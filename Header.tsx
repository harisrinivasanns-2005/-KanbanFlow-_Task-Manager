export function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow">
      <div>
        <h1 className="text-xl font-bold">KanbanFlow</h1>
        <p className="text-sm text-gray-500">Task Management</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white">
          + Add Task
        </button>

        <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center">
          👤
        </div>
      </div>
    </header>
  );
}
