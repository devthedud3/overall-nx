import Link from 'next/link';
import { footer, socials } from 'apps/overall/lib/data';
import { IC } from 'apps/overall/public/Icons';

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 inline-flex w-full justify-center ">
      <div className="container w-full">
        <div className="py-10 flex lg:space-x-10">
          <div className="space-y-6">
            <p className="font-black">OVERALL</p>
            <p className="text-xs w-96 opacity-60">
              Partner with OVERALL and simplify managing your property in the
              digital world.
            </p>
            <div className="flex space-x-4 ">
              {socials.map(({ name, link }: any, index: number) => {
                return (
                  <Link
                    href={link}
                    className="cursor-pointer transition hover:scale-105"
                    key={index}
                  >
                    {IC[name]}
                  </Link>
                );
              })}
            </div>
            <p className="gradient-border animate-pulse text-xs w-fit px-3 py-1 border border-black rounded h-fit flex items-center bg-[--primary] text-white font-bold">
              <span className="animate-pulse inline-flex h-3 w-3 rounded-full bg-lime-600 mr-2" />
              IN DEVELOPMENT
            </p>
          </div>
          {footer.map(({ name, tabs }: any, index: number) => {
            return (
              <div className="w-32" key={index}>
                <h2 className="text-sm font-bold">{name}</h2>
                <div className="pt-6 space-y-4">
                  {tabs.map((v: string, i: number) => (
                    <Link
                      key={i}
                      //@ts-ignore
                      href={`/${v.toLocaleLowerCase().replaceAll(' ', '-')}`}
                    >
                      <div className="py-1 w-fit transition-w duration-100 text-xs border-[--primary] hover:border-l-4 hover:pl-3 cursor-pointer">
                        <p className="opacity-60 ">{v}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t border-[--border] py-10 text-xs">
          <div className="flex w-full justify-between">
            <p>Copywrite © 2024 OVERALL. All rights reserved.</p>
            <div className="flex space-x-3">
              <p>Privacy Policy</p>
              <p>Terms</p>
              <p>Code of Conduct</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
