import Link from "next/link";
import { Resizable } from "re-resizable";
import React from "react";

const Nav = () => {
  return (
    <div className="border-r border-r-gray-200">
      <Resizable
        defaultSize={{
          width: 320,
          height: "100%",
        }}
        maxWidth="360px"
        minWidth="207px"
      >
        <nav className="flex flex-col gap-y-10 p-5 w-ful">
          <Link href="/">
            <a className="bg-gray-800 px-5 py-4 text-white rounded-md font-bold text-xl text-center">
              🐻 Zustand Demos
            </a>
          </Link>
          <div className="flex flex-col">
            <h2 className="text-gray-700 font-semibold px-4 mb-2">
              Counter Store
            </h2>
            <Link href="/counter/single">
              <a className="text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-md truncate">
                Counter Demo
              </a>
            </Link>
            <Link href="/counter/increment_by">
              <a className="text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-md truncate">
                Counter Demo w/ Increment By
              </a>
            </Link>
          </div>
        </nav>
      </Resizable>
    </div>
  );
};

export default Nav;
