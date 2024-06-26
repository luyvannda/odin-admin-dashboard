import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import BellProfile from "./BellProfile";
import { navigation } from "../constants";
import SideBar from "./SideBar";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <div className="navbar-container">
      <Disclosure as="nav" className="bg-[#1992d4]">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-0 lg:px-0">
              <div className="relative flex h-16 items-center justify-between sm:grid sm:h-auto sm:justify-normal">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:flex-col sm:space-y-5 ">
                  <div className="flex items-center gap-1 text-xl text-white sm:pt-4">
                    <span className="material-icons text-2xl ">dashboard</span>
                    Dashboard
                  </div>

                  {/* SideBar for tablet and bigger screen design */}
                  <SideBar />
                </div>

                {/* Profile dropdown */}
                <div className="sm:hidden">
                  <BellProfile />
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.id}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-100 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium",
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-icons ">{item.icon}</span>
                      {item.name}
                    </div>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
