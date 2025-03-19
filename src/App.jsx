import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleToggle() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} isSidebarOpen={isSidebarOpen} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected
        isSidebarOpen={isSidebarOpen}
        onStartAddProject={handleStartAddProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        isOpen={isSidebarOpen}
        handleToggle={handleToggle}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
