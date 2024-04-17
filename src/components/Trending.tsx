import { trendingData } from "../constants";

export default function Trending() {
  return (
    <div>
      <h2 className="mb-2 ml-4 font-semibold sm:text-lg">Trending</h2>
      <div className="mx-4 h-fit rounded-lg bg-white shadow-md">
        {trendingData.map((item) => (
          <a
            href="https://github.com/luyvannda"
            target="_blank"
            className="flex items-center justify-center gap-2 sm:justify-normal"
          >
            <img
              className="h-12 w-12 rounded-full object-cover object-center lg:h-14 lg:w-14"
              src={item.imageSrc}
              alt="Trending Profile Image"
            />
            <div>
              <p className="text-xs font-medium sm:text-base">
                {item.userName}
              </p>
              <h3 className="text-sm font-semibold sm:text-lg">
                {item.description}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
