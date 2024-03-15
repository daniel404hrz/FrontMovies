import { Select, SelectItem, Button } from "@nextui-org/react";
import { useState } from "react";
import style from "./panel.module.css";
export default function Panel() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [show, setShow] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  

  if (show) {
    return (
      <aside
        id="default-sidebar"
        className="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto flex items-center content-center flex-col py-2 px-3 h-full bg-slate-700 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <Button
            onClick={() => setShow(false)}
            className={style.button_close}
            isIconOnly
            color="danger"
            aria-label="Like"
          >
            X
          </Button>

          <ul className="space-y-4 mt-4">
            {/* Elementos del menú */}
            <li>
              <Button color="default">
                <b>Listado de Peliculas</b>
              </Button>
            </li>
            <li>
              <Button color="default">
                <b>Listado de Usuarios</b>
              </Button>
            </li>
            <li>
            <div>
      <button
        type="button"
        className="flex bg-gray-100 items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="dropdown-pages"
        data-collapse-toggle="dropdown-pages"
        onClick={toggleDropdown}
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-black transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="flex-1 bg- ml-3 text-left whitespace-nowrap">Formularios</span>
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {dropdownOpen && (
        <ul id="dropdown-pages" className="bg-gray-300 rounded-xl mt-2 space-y-2">
          <li>
          <Button className="w-full " color="default">
          <b>🎞 Peliculas</b>
      </Button>
            
          </li>
          <li>
          <Button className="w-full" color="default">
          <b>🙎‍♂️ Usuarios</b>
      </Button>
            
          </li>
          
        </ul>
      )}
    </div>
            </li>
          </ul>
        </div>
      </aside>
    );
  } else {
    return (
      <Button
        className={style.button_open}
        onClick={() => setShow(true)}
        color="primary"
        variant="solid"
      >
        Mostrar menu
      </Button>
    );
  }
}
