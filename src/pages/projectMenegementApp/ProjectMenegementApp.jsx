import { useState } from 'react';
import NoProject from '../../components/projectMenegementApp/NoProject';
import ProjectSidebar from '../../components/projectMenegementApp/ProjectSidebar';
import NewProjects from '../../components/projectMenegementApp/NewProjects';
import SelectedProject from '../../components/projectMenegementApp/SelectedProject';

function ProjectMenegementApp() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [
      {
        description: 'this is documuntation isan when learn react',
        dueDate: '2024-05-23',
        id: 0.4849954171134261,
        title: 'Learn React',
      },
    ],
    tasks: [],
  });

  function handleAddTask(text) {
    const newOne = {
      id: Math.random(),
      projectId: projectState.selectedProjectId,
      text: text,
    };
    setProjectState((prev) => {
      return {
        ...prev,
        project: prev.project,
        tasks: [...prev.tasks, newOne],
      };
    });
  }

  const filterdTask = projectState.tasks.filter((task) => {
    return (task.projectId = projectState.selectedProjectId);
  });

  function handleDeleteTask(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => {
          return task.id !== id;
        }),
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  }

  function handleCancelAddProduct() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(newProject) {
    const newOne = { id: Math.random(), ...newProject };
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        project: [...prev.project, newOne],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        project: prev.project.filter((prevP) => {
          return prevP.id !== prev.selectedProjectId;
        }),
      };
    });
  }

  const selectedProject = projectState.project.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={filterdTask}
    />
  );

  if (projectState.selectedProjectId === undefined) {
    content = <NoProject onSelectAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProjects
        onAddProject={handleAddProject}
        onCancel={handleCancelAddProduct}
      />
    );
  }

  return (
    <>
      <div id="modal"></div>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          onSelectAddProject={handleStartAddProject}
          projects={projectState.project}
          onSelect={handleSelectedProject}
          projectSelectedId={projectState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default ProjectMenegementApp;
