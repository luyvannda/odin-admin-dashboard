import BellProfile from "./BellProfile";

export default function Header() {
  return (
    <div className="header-container">
      <div className=" items-center sm:flex sm:justify-center lg:grid lg:justify-normal ">
        <div className="flex items-center justify-center gap-2 p-4 ">
          <label htmlFor="search-bar">
            <span className="material-icons">search</span>
          </label>
          <input
            type="text"
            id="search-bar"
            className="lg: w-[70vw] rounded-md bg-slate-300  sm:w-[50vw] lg:w-full"
          />
        </div>
        <div className="hidden sm:block lg:hidden">
          <BellProfile />
        </div>
      </div>

      <div className="lg: hidden justify-center lg:flex ">
        <BellProfile />
      </div>

      <div className="mx-2 grid grid-cols-2 items-center sm:col-start-1 sm:col-end-3 sm:row-span-1 sm:row-start-2 sm:mx-4 sm:-mt-2 md:h-16 ">
        <a
          href="https://github.com/luyvannda"
          target="_blank"
          className="flex items-center justify-center gap-2 sm:justify-normal"
        >
          <img
            className="h-12 w-12 rounded-full lg:h-14 lg:w-14"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User Profile Image"
          />
          <div>
            <p className="text-xs font-medium sm:text-base">Hi there,</p>
            <h1 className="text-sm font-semibold sm:text-lg">
              Mr. Smith (@smith)
            </h1>
          </div>
        </a>

        <div className="flex flex-wrap justify-evenly gap-3 sm:flex-nowrap sm:justify-normal lg:hidden">
          <button className="btn">New</button>
          <button className="btn">Upload</button>
          <button className="btn">Share</button>
        </div>
      </div>

      <div className="hidden lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:grid-cols-3 lg:gap-4">
        <button className="btn">New</button>
        <button className="btn">Upload</button>
        <button className="btn">Share</button>
      </div>
    </div>
  );
}
