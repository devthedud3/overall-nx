export function Button({
  name,
  gradient,
  outlined,
  fullWidth,
  onClick,
}: Button) {
  return (
    <button
      className={`
        transition ease-in text-sm 
        font-medium rounded 
        px-3 py-2 ${fullWidth ? 'w-full' : 'w-fit'}
        hover:bg-zinc-700
        hover:scale-2
        ${outlined && 'border-2'}
        ${gradient && 'gradient-border hover:gradient-border'}
        `}
    >
      {name}
    </button>
  );
}

export default Button;
