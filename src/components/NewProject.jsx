import Input from "./Input";

export default function NewProject({isSidebarOpen}) {
    return(
        <div className={` ${isSidebarOpen ? "translate-x-90" : "translate-x-20"}  transition-transform duration-300 ease-in-out w-[35rem] mt-12`}>
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">Save</button></li>
            </menu>
            <div>
              <Input label="Title" />
              <Input label="Description" isTextArea />
              <Input label="Due Date" />
            </div>
        </div>
    );
}