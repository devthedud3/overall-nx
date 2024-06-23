export function Chip({ name, active, status }: Chip) {
  const colors: { [key: string]: string } = {
    pending: 'yellow',
    approved: 'green',
    denied: 'red',
  };

  return (
    <div
      className={`text-xs w-fit py-2 px-3 rounded ${
        !active && 'opacity-20 grayscale'
      } text-${colors[status]}-500 bg-${colors[status]}-100`}
    >
      <p className="">{name.toLocaleUpperCase()}</p>
    </div>
  );
}

export default Chip;
