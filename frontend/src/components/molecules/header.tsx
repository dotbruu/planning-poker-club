"use client";
/* eslint-disable import/no-extraneous-dependencies */
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Logo } from "../assets/logo";

export function Header({ isRoom = false }: { isRoom?: boolean }) {
  function copyUrlToClipboard() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);

    toast("Copied! 😉", {
      position: "top-right",
      type: "success",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      theme: "light",
    });
  }
  return (
    <header className="w-full absolute top-0 flex h-20 z-50 bg-[#E1EAF9] px-4">
      <div
        className={`w-full mx-auto px-4 flex justify-between items-center ${
          !isRoom && "container"
        }`}
      >
        <a href="/">
          <Logo />
        </a>
        {isRoom ? (
          <button
            className="w-20 md:w-60 h-auto md:h-8 border-2 text-white
            rounded-md border-none font-bold bg-primary-light hover:bg-primary"
            onClick={copyUrlToClipboard}
          >
            Invite a teammate
          </button>
        ) : null}
      </div>
      <ToastContainer />
    </header>
  );
}
