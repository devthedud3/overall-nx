'use client';
import { FEATURE_TABLE, PRICING } from 'apps/overall/lib/data';
import { useState } from 'react';
import { Button } from '../common';
import { IC } from 'apps/overall/public/Icons';

export function Pricing() {
  const [selected, setSelected] = useState(1);
  return (
    <center className="space-y-4">
      <h1 className="text-4xl font-bold">Pricing</h1>
      <p className="pb-10 text-xs">
        Select a subscription plan that fits your management needs.
      </p>
      <section className="text-sm ">
        <div className="flex space-x-6 items-center justify-center">
          {PRICING.map((item, index) => (
            <div
              key={index}
              className={`
              transition
              h-fit
              cursor-pointer
              ${
                selected === index && 'gradient-border'
              } w-96 bg-zinc-800 p-6 pb-6 rounded text-left text-sm`}
              onClick={() => setSelected(index)}
            >
              <div
                className={`transition-opacity -translate-y-12 flex justify-center ${
                  index === 1 && selected === 1 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="bg-red-600 font-bold w-fit p-3 rounded">
                  Recommended
                </p>
              </div>

              <h3 className="text-2xl font-bold">
                {item.name} - ${item.monthlyPrice}
              </h3>
              <p className="text-xs pb-6">* Plans are billed monthly *</p>
              <p className="pb-6">{item.description}</p>
              <div className="pb-6 opacity-50 space-y-2">
                {item.features.map((feature, index) => (
                  <div
                    className="flex items-center space-x-2"
                    key={`${feature}${index}`}
                  >
                    {feature !== '-' ? IC['check'] : IC['notCheck']}
                    <p key={`${feature}${index}`}>{feature}</p>
                  </div>
                ))}
              </div>
              {selected === index && (
                <Button
                  name={`Subscribe to the ${item.name}`}
                  outlined
                  fullWidth
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center pt-10">
          <p className="pb-10 text-xs">All subscription plans include:</p>
          <p className="pb-16 text-xs">All subscription plans include:</p>
        </div>
      </section>
    </center>
  );
}

export default Pricing;
