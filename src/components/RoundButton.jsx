export default function RoundButton({ image, text, ...props }) {
  return (
    <button {...props} className="cursor-pointer flex items-center space-x-2 mb-4 hover:bg-stone-600 rounded-xl p-2 group">
      <span className="relative flex p-2 text-base rounded-full bg-stone-400">
        <img src={image} alt={text} className="size-5"/>
      </span>
      <p className="group-hover:text-stone-100" >{text}</p>
    </button>
  );
}
