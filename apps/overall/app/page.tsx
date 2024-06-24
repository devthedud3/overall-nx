import { Button, Chip } from './components/common';
import { Footer, Header } from './components';
import { FaRegSmileBeam } from 'react-icons/fa';
import { MdDashboardCustomize } from 'react-icons/md';
import { LuArrowBigUpDash } from 'react-icons/lu';
import { PiBrainDuotone } from 'react-icons/pi';

export default function Landing() {
  return (
    <div className="wrapper flex flex-col">
      <Header />
      <section className="container flex my-48 items-center">
        <div className="h-full">
          <h1 className="text-6xl w-full font-extrabold pb-6">
            Turn-key property management solution
          </h1>
          <p className="text-sm pb-16">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            eos sunt eveniet soluta, ducimus harum rerum non mollitia officia
            est enim earum! Id odit deleniti perferendis architecto est rem
            atque?
          </p>
          <Chip name="25% off for the first 3 months" status="denied" active />
          <div className="flex space-x-2 pt-8">
            {['Request a demo', 'Learn More'].map((item, index) => (
              <Button key={index} name={item} gradient={index === 0} />
            ))}
          </div>
        </div>
        <div className="border flex h-96 items-center justify-center w-full">
          <p>image goes here</p>
        </div>
      </section>
      <section className="py-12 border-t border-b border-zinc-800 w-full h-fit flex justify-center">
        <div className="container flex items-center justify-between text-sm space-x-6">
          {['Earn More', 'Happier Tenants', 'More Services', 'Hassle-free'].map(
            (item, index) => (
              <div key={index} className="block space-y-6 ">
                <div className="rounded w-fit ">
                  {index === 0 && <LuArrowBigUpDash size={30} color="white" />}
                  {index === 1 && <FaRegSmileBeam size={30} color="white" />}
                  {index === 2 && (
                    <MdDashboardCustomize size={30} color="white" />
                  )}
                  {index === 3 && <PiBrainDuotone size={30} color="white" />}
                </div>
                <p className="font-bold">{item}</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  eum obcaecati exercitationem hic, dolor corrupti vel
                </p>
              </div>
            )
          )}
        </div>
      </section>
      <section className="container w-full py-24 w-[1140px]">
        <div className="text-sm border">testing</div>
      </section>
      <Footer />
    </div>
  );
}
