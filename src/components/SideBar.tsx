import { navigation } from "../constants";
import { classNames } from "./NavBar";

export default function SideBar() {
  return (
    <div className="hidden min-h-[100vh] sm:block">
      <div className="">
        {navigation.map((item) => (
          <div key={item.id} className="grid">
            <a
              key={item.name}
              href={item.href}
              className={`sm:mb-4 ${classNames(
                item.current
                  ? " bg-gray-900 text-white"
                  : "text-gray-100 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium",
              )}`}
              aria-current={item.current ? "page" : undefined}
            >
              <div className="flex items-center gap-2">
                <span className="material-icons text-white">{item.icon}</span>
                {item.name}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
