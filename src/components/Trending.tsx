export default function Trending() {
  return (
    <div>
      <h2 className="mb-2 ml-4 font-semibold sm:text-lg">Trending</h2>
      <div className="mx-4 h-fit rounded-lg bg-white shadow-md">
        <a
          href="https://github.com/luyvannda"
          target="_blank"
          className="flex items-center justify-center gap-2 sm:justify-normal"
        >
          <img
            className="h-12 w-12 rounded-full lg:h-14 lg:w-14"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Trending Profile Image"
          />
          <div>
            <p className="text-xs font-medium sm:text-base">Hi there,</p>
            <h3 className="text-sm font-semibold sm:text-lg">
              Mr. Smith (@smith)
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
}
