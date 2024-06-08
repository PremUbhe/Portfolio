import React from "react";

// components
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="navbar py-4 bg-trans backdrop-blur-sm">
      <div className="container flex justify-between items-center">
        <div className="nav-logo">
          <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-violet-500">Prem Ubhe <span className="text-primary">.</span></h1>
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
