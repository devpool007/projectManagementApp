import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [projectsState, setProjectsState] = useState({
    selectedProjectId : undefined,
    projects: []
  });

  function handleToggle() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function handleStartAddProject(){
     setProjectsState( prevState =>{
     return{
      ...prevState, 
      selectedProjectId:null
     };
  });
  }

  let content;

  if (projectsState.selectedProjectId === null){
    content = <NewProject isSidebarOpen={isSidebarOpen}/>

  }
  else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected isSidebarOpen={isSidebarOpen} onStartAddProject={handleStartAddProject}/>
  }

  // <ProjectsSidebar isOpen={isSidebarOpen} handleToggle={handleToggle}/>
{/* <NewProject isSidebarOpen = {isSidebarOpen}/> */}
  return (
    <main className="h-screen my-8 flex gap-8">
   <ProjectsSidebar onStartAddProject={handleStartAddProject} isOpen={isSidebarOpen} handleToggle={handleToggle}/>
   {content}
    </main>
  );    
}

export default App;