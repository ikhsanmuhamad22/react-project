import NewTask from './NewTask';

export default function ProjectMenegementTask({
  tasks,
  onAddTask,
  onDeleteTask,
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-stone-700">Task</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length < 1 ? (
        <p className="text-stone-800 my-4">
          This project does not have any project yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
