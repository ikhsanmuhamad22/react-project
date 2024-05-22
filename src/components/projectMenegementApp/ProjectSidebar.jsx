import ProductMenegementButton from './ProductMenegementButton';

export default function ProjectSidebar({
  onSelectAddProject,
  projects,
  onSelect,
  projectSelectedId,
}) {
  return (
    <aside className="bg-stone-900 text-stone-50 w-1/3 md:w-72 px-8 py-16 rounded-r-xl">
      <h2 className="md:text-xl py-4 font-bold uppercase">Your Projects</h2>
      <ProductMenegementButton onClick={onSelectAddProject}>
        + Add project
      </ProductMenegementButton>
      <ul className="mt-6">
        {projects.map((project) => {
          let classCss =
            'w-full text-left p-2 text-stone-200  hover:bg-stone-800 rounded-lg hover:text-stone-200';
          if (projectSelectedId === project.id) {
            classCss += ' bg-stone-800';
          }
          return (
            <li key={project.id} className="m-1">
              <button onClick={() => onSelect(project.id)} className={classCss}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
