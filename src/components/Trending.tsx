import { trendingData } from "../constants";

export default function Trending() {
  return (
    <div>
      <h2 className="mb-2 ml-4 font-semibold sm:text-lg">Trending</h2>
      <div className="mx-4 grid h-fit grid-cols-2 gap-2 rounded-lg bg-white shadow-md lg:grid-cols-1 lg:px-3 lg:py-2">
        {trendingData.map((item) => (
          <a
            href="https://github.com/luyvannda"
            target="_blank"
            className="flex items-center gap-4 p-4 hover:bg-gray-100  sm:justify-normal lg:w-full"
          >
            <img
              className="h-12 w-12 rounded-full object-cover object-center lg:h-14 lg:w-14"
              src={item.imageSrc}
              alt="Trending Profile Image"
            />
            <div>
              <p className="text-xs font-medium sm:text-sm">{item.userName}</p>
              <h3 className="text-xs text-gray-400 sm:text-base">
                {item.description}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
