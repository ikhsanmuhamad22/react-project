export default function ProductMenegementButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-stone-800 text-stone-400 px-2 p-1 rounded-md hover:bg-stone-600 hover:text-stone-200"
    >
      {children}
    </button>
  );
}
