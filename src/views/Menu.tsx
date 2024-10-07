import { useState } from "react";

const Menu = () => {
  const [menuSelect, setMenuSelect] = useState("Tecnólogia");

  const listMenu = [
    { label: "Inicio", value: "/" },
    { label: "Tecnólogia", value: "/" },
    { label: "Novedades", value: "/" },
    { label: "Más vendidos", value: "/" },
  ];

  return (
    <ul className="min-h-12 w-full px-[4%] flex items-center gap-4 shadow-lg mb-2 text-gray-600 overflow-x-auto">
      {listMenu.map(({ label }, index) => {
        return (
          <li
            key={index}
            className={`cursor-pointer text-center flex flex-col gap-0.5 items-center transition-all hover:text-blue-800 hover:font-semibold ${
              menuSelect === label
                ? "text-blue-800 font-semibold relative h-full"
                : ""
            }`}
            onClick={() => {
              setMenuSelect(label);
            }}
          >
            <p>{label}</p>
            {menuSelect === label && (
              <span className="rounded-md w-5 h-1 bg-yellow-400 absolute -bottom-1"></span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
