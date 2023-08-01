import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const { username, location, setUsername } = props;
  let navigate = useNavigate();

  // useEffect(() => {
  //   console.log(username);
  //   if (username) setHasUserLogin(true);
  // }, [username]);

  const handleLogout = (event) => {
    event.preventDefault();
    setUsername(null);
    navigate("/");
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex items-center">
            {username ? (
              <div className="flex gap-2">
                <p className="text-center">{username}</p>
                <button
                  onClick={handleLogout}
                  className="text-white bg-sky-500 hover:bg-sky-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link
                to="/LogIn"
                className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
