"use client";
import React, { useRef } from "react";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  const handleOpenSearch = () => {
    // inputRef.current?.classList
    inputRef.current?.classList.toggle("hidden");
    searchButtonRef.current?.classList.toggle("hidden");
    inputRef.current?.focus();
  };

  const handleSearch = (event) => {
    console.log(event.target.value)
  }

  const handleInputBlur = () => {
    inputRef.current?.classList.add("hidden");
    searchButtonRef.current?.classList.remove("hidden");
  };

  return (
    <div className="navbar bg-base-100 border " data-theme="light">
      <div className="flex-1">
        <span className="font-bold text-xl">{title}</span>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end flex">
          <div className="form-control">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              onKeyDown={(e) => e.key === "Enter" && handleSearch}
              onBlur={handleInputBlur}
              className="input hidden input-bordered w-0 md:w-auto transition-all duration-3000 mr-2"
            />
          </div>
          <button 
            ref={searchButtonRef} 
            className="btn btn-ghost btn-circle"
            onClick={handleOpenSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
