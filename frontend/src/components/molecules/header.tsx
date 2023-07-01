"use client";
/* eslint-disable import/no-extraneous-dependencies */
import { ToastContainer, toast } from "react-toastify";

import { LogoIcon } from "../icons/logo-icon";
import "react-toastify/dist/ReactToastify.css";

export function Header() {
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
      <header className="w-full h-[80px] mr-8 px-6 bg-white flex flex-row justify-between items-center">
        <a href="/">
          <div
            className="w-full h-[200px] flex content-center
      items-center"
          >
            <LogoIcon dark width="200px" />
          </div>
        </a>
        <button
          className="w-20 md:w-60 h-auto md:h-8 border-2 rounded-sm border-black
      hover:border-primary hover:text-primary"
          onClick={copyUrlToClipboard}
        >
          Invite a teammate
        </button>
      </header>
      <ToastContainer />
    </>
  );
}
