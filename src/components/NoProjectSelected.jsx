import noProjectImage from "../assets/no-projects.png";
import createProjectImg from "../assets/create.png"
import RoundButton from "./RoundButton";
export default function NoProjectSelected() {
  return (
    <div className="mt-24 items-center text-center w-2/3">
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
        <RoundButton image={createProjectImg} text="Create Project" />
      </div>
    </div>
  );
}
