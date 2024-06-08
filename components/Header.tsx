import React from "react";

// components
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="navbar py-4 border-b-2">
      <div className="container flex justify-between items-center">
        <div className="nav-logo">
          <h1 className="text-2xl">Prem Ubhe <span className="text-orange-500">.</span></h1>
        </div>

        {/* desktop navbar */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* mobile navbar */}
        <div className="lg:hidden">
            <h1>mobile</h1>
        </div>
      </div>
    </header>
  );
}
