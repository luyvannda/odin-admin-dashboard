import BellProfile from "./BellProfile";

export default function Header() {
  return (
    <div className="header-container">
      <div className=" items-center sm:flex sm:justify-center ">
        <div className="flex items-center justify-center gap-2 p-4 sm:p-0">
          <label htmlFor="search-bar">
            <span className="material-icons">search</span>
          </label>
          <input
            type="text"
            id="search-bar"
            className="w-[70vw] rounded-md bg-slate-300 sm:w-[50vw]"
          />
        </div>
        <div className="hidden sm:block">
          <BellProfile />
        </div>
      </div>
      <div className="grid grid-cols-2 items-center">
        <div className="ml-8 flex items-center gap-2 sm:ml-0">
          <img
            className="h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div>
            <p className="font-semibold">Hi there,</p>
            <h1 className="text-lg font-bold">Mr. Smith (@smith)</h1>
          </div>
        </div>

        <div className="space-x-2">
          <button className="btn">New</button>
          <button className="btn">Upload</button>
          <button className="btn">Share</button>
        </div>
      </div>
    </div>
  );
}
