import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleToggle() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  // <ProjectsSidebar isOpen={isSidebarOpen} handleToggle={handleToggle}/>
{/* <NewProject isSidebarOpen = {isSidebarOpen}/> */}
  return (
    <main className="h-screen my-8 flex gap-8">
   <ProjectsSidebar isOpen={isSidebarOpen} handleToggle={handleToggle}/>
   <NoProjectSelected/>
    </main>
  );    
}

export default App;