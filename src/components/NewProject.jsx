import Input from "./Input";
import Modal from "./Modal";
import { useRef } from "react";

export default function NewProject({ isSidebarOpen, onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Invalid Input</h2>
        <p className="text-stone-700 mb-2">Oops... You didn't enter values.</p>
        <p className="text-stone-700">
          Please make sure all fields are filled out.
        </p>
      </Modal>
      <div
        className={` ${
          isSidebarOpen ? "translate-x-90" : "translate-x-20"
        }  transition-transform duration-300 ease-in-out w-2/3 mt-12`}
      >
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            >
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
    </>
  );
}
