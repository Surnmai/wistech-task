import React from "react";

// import navLinks Data
import { navLinks } from "../data";

// import React Icons
import { FaBars, FaTimes } from "react-icons/fa";

// import redux Selector and Dispatch
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../features/store";
import { toggleMenuBtn } from "../features/navSlice";

const Home = () => {
  const { menuBar } = useSelector((state: RootState) => state.nav);
  console.log(menuBar);

  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      {/* Header  */}
      <header>
        {/* close and open Icons  */}

        <div
          className="icons"
          onClick={() => {
            dispatch(toggleMenuBtn());
          }}
        >
          <FaBars id="menu-bars" />
        </div>

        {/* Logo  */}
        <h4 className="logo">
          Wis<span>Tech</span>
        </h4>

        {/* Nav Items  */}
        <nav className={`${menuBar ? "active" : ""}`}>
          {/* logo  */}
          <h4 className="logo">
            Wis<span>Tech</span>
          </h4>

          {/* menuBtn  */}
          <div
            className="closeMenu"
            onClick={() => {
              dispatch(toggleMenuBtn());
            }}
          >
            <FaTimes id="menu-bars" />
          </div>

          <ul>
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <a href={`#${link?.href}`} className="active">
                    {link?.title}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* button  */}
          <div className="btn">
            <a href="#">Free Quote</a>
          </div>
        </nav>

        {/* button  */}
        <a className="btn" href="#">
          Free Quote
        </a>
      </header>

      <section>Home</section>
    </>
  );
};

export default Home;
