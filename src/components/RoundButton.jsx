export default function RoundButton({ image, text, ...props }) {
  return (
    <span className="flex items-center space-x-2 mb-4">
      <button {...props} className="p-2 text-base rounded-full bg-stone-500 hover:bg-stone-400">
        <img src={image} alt={text} className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      <p>{text}</p>
    </span>
  );
}
