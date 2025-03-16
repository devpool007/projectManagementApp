import { useState } from "react";

export default function ProjectsSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  //className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-75 rounded-r-2xl"
  return (
      <aside
        className={`fixed top-0 left-0 h-screen bg-stone-900 text-stone-50 w-(--width-aside) [--width-aside:--spacing(80)]  transform   ${
          isOpen ? "translate-x-0" : "-translate-x-[calc(var(--width-aside)-44px)]"
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
          <span className="flex items-center space-x-2 mb-4">
            <button className="p-2 text-base rounded-full bg-stone-500 hover:bg-stone-400">
              <img
                src="/src/assets/plus.png"
                alt="Add"
                className="w-4 h-4 md:w-5 md:h-5"
              />
            </button>
            <p>Add Project</p>
          </span>
        </div>
        <ul></ul>
      </aside>

  );
}
