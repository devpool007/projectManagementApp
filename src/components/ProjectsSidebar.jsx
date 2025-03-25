import addProjectImg from "../assets/plus.png";
import RoundButton from "./RoundButton";

export default function ProjectsSidebar({
  isOpen,
  handleToggle,
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectd,
}) {
  //className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-75 rounded-r-2xl"
  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-stone-900 text-stone-50 w-(--width-aside) [--width-aside:--spacing(80)]  transform   ${
        isOpen
          ? "translate-x-0"
          : "-translate-x-[calc(var(--width-aside)-44px)]"
      } transition-transform duration-300 ease-in-out shadow-lg`}
    >
      <button
        onClick={handleToggle}
        className="relative top-3 left-[calc(var(--width-aside)-40px)] p-2.5 bg-stone-600 text-stone-50 rounded-md hover:bg-stone-400"
        aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        <img
          src="/src/assets/control.png"
          alt="Toggle Sidebar"
          className="w-4 h-4"
        />
      </button>

      <h2 className="px-5 pt-6 mb-8 font-bold uppercase text-xl md:text-3xl text-stone-200">
        Your Projects
      </h2>
      <div className="px-5">
        <RoundButton
          onClick={onStartAddProject}
          image={addProjectImg}
          text="Add Project"
        />
      </div>
      <ul className="px-5 pt-6 mb-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800 ";
          
          if (project.id === selectedProjectd) {
            cssClasses += "bg-stone-800 text-stone-200";
          } else {
            cssClasses += "text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
