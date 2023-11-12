import React from "react";

type Props = {};

export default function ProtectedPage({}: Props) {
  return (
    <main>
      <div className="flex justify-center items-center mt-12">
        <div className="w-[50%] ">
          <h1 className="text-[32px] font-bold py-3 text-center">Wishlist</h1>
          <p>
            All the items you have added to your wishlist will be displayed
            here.
          </p>

          <div className="mt-10">
            <div className="bg-slate-100 p-3 rounded-md">
              <h1 className="text-[22px] font-bold">Shoes by Nike</h1>
              <p>Price: $100</p>
              <p>Quantity: 2</p>
            </div>
          </div>

          <div className="mt-10">
            <div className="bg-slate-100 p-3 rounded-md">
              <h1 className="text-[22px] font-bold">Smart Watch by Zero</h1>
              <p>Price: $50</p>
              <p>Quantity: 2</p>
            </div>
          </div>

          <div className="mt-10">
            <div className="bg-slate-100 p-3 rounded-md">
              <h1 className="text-[22px] font-bold">Coat by Leather</h1>
              <p>Price: $160</p>
              <p>Quantity: 1</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
