import { Link, Outlet, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserTie } from "react-icons/fa";

const Sidebar = () => {
  const links = [
    { id: 1, name: "About", link: "/about", icon: <FaUserTie /> },
    { id: 2, name: "projects", link: "/projects", icon: <FaUserTie /> },
    { id: 3, name: "contact", link: "/contact", icon: <FaUserTie /> },
  ];

  const location = useLocation();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-sm btn-outline btn-primary drawer-button lg:hidden fixed top-4 left-4"
        >
          <RxHamburgerMenu size={24} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {links.map((link) => (
            <li
              key={link.id}
              className={`flex items-center space-x-2 rounded-lg ${
                location.pathname === link.link
                  ? "text-secondary bg-primary"
                  : "text-gray-700 dark:text-gray-300"
              } hover:text-secondary transition-all duration-300   md:text-lg text-sm`}
            >
              <Link to={link.link} className="flex p-4  items-center w-full">
                <span className="text-xl md:text-2xl">{link.icon}</span>
                <span className="ml-3">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
