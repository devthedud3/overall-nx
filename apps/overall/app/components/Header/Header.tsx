export function Header() {
  const headerOptions = ['About Us', 'Features', 'Pricing', 'FAQ'];
  return (
    <header className="py-6 w-full inline-flex justify-between items-center">
      <h1 className="font-bold">OVERALL</h1>
      <div className="inline-flex space-x-2 ">
        {headerOptions.map((item, index) => (
          <p
            key={index}
            className="transition ease-in text-sm font-medium rounded px-3 py-2 w-fit hover:bg-zinc-700 cursor-pointer"
          >
            {item}
          </p>
        ))}
      </div>
      <div className="flex space-x-2">
        {['Contact Us', 'Sign Up'].map((item, index) => (
          <p
            key={index}
            className={`
              transition ease-in text-sm 
              font-medium border rounded 
              px-3 py-2 w-fit 
              hover:bg-zinc-700 cursor-pointer
              ${index === 1 && 'gradient-border'}

              `}
          >
            {item}
          </p>
        ))}
      </div>
    </header>
  );
}

export default Header;
