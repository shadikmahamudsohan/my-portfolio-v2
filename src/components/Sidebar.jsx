import { Link, Outlet, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserTie } from "react-icons/fa";
import ThemeToggler from "./ui/ThemeToggler";

const Sidebar = () => {
  const links = [
    { id: 1, name: "Home", link: "/", icon: <FaUserTie /> },
    { id: 1, name: "About", link: "/about", icon: <FaUserTie /> },
    { id: 2, name: "projects", link: "/projects", icon: <FaUserTie /> },
    { id: 3, name: "contact", link: "/contact", icon: <FaUserTie /> },
  ];

  const location = useLocation();

  return (
    <div className="drawer lg:drawer-open font-space-mono ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center min-h-screen p-6 ">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden fixed top-5 right-5 z-50"
        >
          <RxHamburgerMenu size={24} />
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="pt-[40px] menu bg-neutral bg-clip-padding bg-opacity-60 border-r-2 border-primary text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.link}
                className={`btn mb-5 btn-block ${
                  location.pathname === link.link ||
                  (location.pathname === "home" && link.link === "/")
                    ? "btn-primary"
                    : "btn-neutral"
                } w-full`}
              >
                <span className="text-xl md:text-2xl">{link.icon}</span>
                <span className="ml-3">{link.name}</span>
              </Link>
            </li>
          ))}
          <li className="">
            <ThemeToggler />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
