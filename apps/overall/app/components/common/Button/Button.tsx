export function Button({ name, gradient, onClick }: Button) {
  return (
    <p
      className={`
              transition ease-in text-sm 
              font-medium rounded 
              px-3 py-2 w-fit 
              hover:bg-zinc-700 cursor-pointer
              ${gradient && 'gradient-border hover:gradient-border'}

              `}
    >
      {name}
    </p>
  );
}

export default Button;
