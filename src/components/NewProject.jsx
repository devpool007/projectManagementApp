import Input from "./Input";
import { useRef} from "react";

export default function NewProject({ isSidebarOpen, onAdd }) {

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        //validation
        onAdd({
            title : enteredTitle,
            description : enteredDescription,
            dueDate : enteredDueDate 
        });
    }
  return (
    <div
      className={` ${
        isSidebarOpen ? "translate-x-90" : "translate-x-20"
      }  transition-transform duration-300 ease-in-out w-2/3 mt-12`}
    >
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button onClick={handleSave} className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" isTextArea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
