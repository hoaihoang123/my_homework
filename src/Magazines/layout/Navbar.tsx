import React from "react";
import { BsCart } from "react-icons/bs";

const listMenu = ["Home", "Blog", "Category", "Product", "Login", "Customer"];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 text-white bg-gray-800 navbar">
      <div className="ml-20 text-2xl text-white title">Magazines</div>
      <div className="flex mr-20 list-menu item-center">
        <ul className="flex space-x-4 list-none list-menu-items mr-15">
          {listMenu.map((item, index) => (
            <li
              key={index}
              className="flex text-lg text-center item-center justitfy-center"
            >
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-3 px-2 py-2 text-black rounded-sm cart bg-amber-50">
          <a href="/cart" className="cart-link">
            <BsCart />
          </a>
          <span className="cart-count">0</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
