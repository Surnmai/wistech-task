// import React from "react";

// import navLinks Data
import { navLinks, ourServices } from "../data";

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
            <FaTimes id="closeMenu-bars" />
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

      {/* Hero Section Starts  */}
      <section className="hero">
        <div className="content">
          <h3>Transforming business with cutting edge solutions</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            incidunt? Dolores sed voluptatum provident, molestiae est, totam
            tempora eligendi maiores consequuntur voluptatibus suscipit maxime
            doloremque assumenda quidem voluptates necessitatibus accusantium?
          </p>
        </div>
      </section>
      {/* Hero Section Ends  */}

      {/* Our services starts here  */}
      <section className="services">
        {/* title  */}

        <h4 className="title">
          Our <span>Services</span>
        </h4>

        {/* Our Services starts */}
        <div className="service">
          {ourServices.map((service, index) => {
            return (
              <div key={index}>
                <img src={service?.img} alt={service?.title} />{" "}
                <h4>{service.title}</h4>
                <p>{service?.text}</p>
              </div>
            );
          })}
        </div>

        {/* Our Services end  */}
      </section>
      {/* Our services ends here  */}
    </>
  );
};

export default Home;
