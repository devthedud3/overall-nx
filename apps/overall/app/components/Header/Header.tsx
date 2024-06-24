import { Button } from '../common';

export function Header() {
  const headerOptions = ['About Us', 'Features', 'Pricing', 'FAQ'];
  return (
    <header className="container py-6 inline-flex justify-between items-center">
      <h1 className="font-black">OVERALL</h1>
      <div className="inline-flex space-x-2 ">
        {headerOptions.map((item, index) => (
          <p
            key={index}
            className="transition ease-in text-sm opacity-30 font-bold rounded px-3 py-2 w-fit hover:opacity-100 hover:bg-zinc-700 cursor-pointer"
          >
            {item}
          </p>
        ))}
      </div>
      <div className="flex space-x-2">
        {['Contact Us', 'Sign Up'].map((item, index) => (
          <Button key={index} name={item} gradient={index === 1} />
        ))}
      </div>
    </header>
  );
}

export default Header;
