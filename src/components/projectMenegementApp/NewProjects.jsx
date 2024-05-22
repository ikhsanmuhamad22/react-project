import { useRef } from 'react';
import ProjectMenegementInput from './ProjectMenegementInput';
import ProjectMenegementModal from './ProjectMenegementModal';

export default function NewProjects({ onAddProject, onCancel }) {
  const titleref = useRef();
  const descriptionref = useRef();
  const dueDateref = useRef();
  const modal = useRef();

  function handleSaveProject() {
    const title = titleref.current.value;
    const description = descriptionref.current.value;
    const dueDate = dueDateref.current.value;

    if (
      title.trim() === '' ||
      description.trim() === '' ||
      dueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAddProject({ title, description, dueDate });
  }

  return (
    <>
      <ProjectMenegementModal ref={modal} captionButton="Close">
        <h2 className="text-xl font-bold p-3 text-stone-800">Invalid Input</h2>
        <p className="text-stone-600 m-2">
          Uppps... its like you have not input right
        </p>
        <p className="text-stone-600 m-2">
          please input the all project before you save
        </p>
      </ProjectMenegementModal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-900 hover:text-stone-950"
            >
              Cencel
            </button>
          </li>
          <li>
            <button
              onClick={handleSaveProject}
              className="mx-4 py-1 px-4 rounded-md bg-stone-900 text-stone-100 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <ProjectMenegementInput type="text" ref={titleref} label="Title" />
          <ProjectMenegementInput
            ref={descriptionref}
            label="Description"
            isTextarea
          />
          <ProjectMenegementInput
            type="date"
            ref={dueDateref}
            label="Due date"
          />
        </div>
      </div>
    </>
  );
}
