import ProjectMenegementTask from './ProjectMenagementTask';

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="w-[32rem] pt-16">
      <div className="border-b-2 border-stone-300 mb-4">
        <header className="flex justify-between items-center">
          <h1 className="font-bold text-xl text-stone-900 py-2">
            {project.title}
          </h1>
          <button onClick={onDelete}>Delete</button>
        </header>
        <p className="text-stone-500">{formattedDate}</p>
        <p className="py-4 whitespace-pre-wrap">{project.description}</p>
      </div>
      <ProjectMenegementTask
        tasks={tasks}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}
