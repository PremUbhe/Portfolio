import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container py-5 border-b-2">
      <div className="logo">
        <h1>Header</h1>
      </div>
      <div className="flex">
        <Link href="/">
          <h1>Home</h1>
        </Link>
      </div>
    </header>
  );
}
