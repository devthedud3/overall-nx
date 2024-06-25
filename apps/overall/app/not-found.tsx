import React from 'react';

type Props = {};

export default function Page(props: Props) {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center ">
      <h1 className="text-3xl pb-6">
        This site is currently under development
      </h1>
      <p className="pb-2">
        You can check back in a few days, or shoot me an email:
      </p>
      <pre className="text-sm">corey.cushnie@gmail.com</pre>
    </div>
  );
}
