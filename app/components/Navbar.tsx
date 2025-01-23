'use client';
// components/Navbar.tsx
import { useState } from 'react';

interface NavLinkProps {
    to: string; // Specify the type of 'to'
    children: React.ReactNode;
  }
  

  const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
    return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}
interface MobileNavProps {
    open: boolean;
    setOpen: (isOpen: boolean) => void; // Specify the type of setOpen
  }
  
  const MobileNav: React.FC<MobileNavProps> = ({ open, setOpen }) => {
    return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white bg-opacity-80 backdrop-blur-lg transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md`}
    >
      <div className="flex items-center justify-center filter drop-shadow-lg bg-white h-20">
        {/* Logo container */}
        <a className="text-xl font-semibold" href="/"  style={{fontFamily: 'js-Math cmbx-10 sans-serif'}}>
          RESC.AI
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="/"
          onClick={() => setTimeout(() => setOpen(!open), 100)}
          style={{ fontFamily: "'Julius Sans One', sans-serif" }}
        >
          Home
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/about"
          onClick={() => setTimeout(() => setOpen(!open), 100)}
          style={{ fontFamily: "'Julius Sans One', sans-serif" }}
        >
          About
        </a>
        <a
          className="text-xl font-medium my-4"
          href="/team"
          onClick={() => setTimeout(() => setOpen(!open), 100)}
          style={{ fontFamily: "'Julius Sans One', sans-serif" }}
        >
          Team
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/Workflow"
          onClick={() => setTimeout(() => setOpen(!open), 100)}
          style={{ fontFamily: "'Julius Sans One', sans-serif" }}
        >
          Workflow
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex filter drop-shadow-md bg-white bg-opacity-80 px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <a className="text-2xl font-semibold" href="/" style={{fontFamily: 'js-Math cmbx-10 sans-serif',padding:"50px",fontSize:'2rem'
}}>
          RESC.AI
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* Hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-3.5' : ''
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-3.5' : ''
            }`}
          />
        </div>

        <div className="hidden lg:flex" style={{ fontFamily: "'Julius Sans One', sans-serif",padding:"50px",fontSize:'1.4rem' }}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/searchpage">ARTICLE SUMMERIZER</NavLink>
          <NavLink to="/audiopage">AUDIO SUMMERIZER</NavLink>
          <NavLink to="/bookpage">BOOK SUMMERIZER</NavLink>
        </div>
      </div>
    </nav>
  );
}
