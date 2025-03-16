import noProjectImage from "../assets/no-projects.png";
import createProjectImg from "../assets/create.png";
import RoundButton from "./RoundButton";

export default function NoProjectSelected({
  isSidebarOpen,
  onStartAddProject,
}) {
  const divClassName = `${
    isSidebarOpen ? "translate-x-90" : "translate-x-20"
  } transition-transform duration-300 ease-in-out mt-28 items-center text-center w-2/3`;

  return (
    <div className={divClassName}>
      <img
        src={noProjectImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl fonr-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <div className="mt-4 flex justify-center">
        <RoundButton
          onClick={onStartAddProject}
          image={createProjectImg}
          text="Create Project"
        />
      </div>
    </div>
  );
}
