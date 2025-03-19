import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = useRef();
  const dialogClass = "fixed m-auto inset-0 rounded-lg shadow-lg p-6 backdrop:bg-stone-900/90 w-96";
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className={dialogClass}>
      {children}
      <form method="dialog" className="mt-4 text-right">
        <button className="border-red-400 border-1 rounded-md px-6 py-1 hover:bg-stone-800 text-stone-100 bg-stone-600">{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
