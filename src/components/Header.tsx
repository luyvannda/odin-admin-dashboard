import BellProfile from "./BellProfile";

export default function Header() {
  return (
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
  );
}
