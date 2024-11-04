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
    <>
      <header className="w-full fixed flex h-20 bg-white px-4">
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
              className="w-20 md:w-60 h-auto md:h-8 border-2 rounded-sm border-black
      hover:border-primary hover:text-primary font-bold"
              onClick={copyUrlToClipboard}
            >
              Invite a teammate
            </button>
          ) : null}
        </div>
        <ToastContainer />
      </header>
    </>
  );
}
