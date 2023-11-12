import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="px-8 py-4  flex justify-between">
      <div>Logo</div>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link href={"/"}>Home (Public)</Link>
          </li>
          <li>
            <Link href={"/wishlist"}>Wishlist (Protected)</Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/register"}>Register </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
