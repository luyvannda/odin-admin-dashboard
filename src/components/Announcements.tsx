import { announcement } from "../constants";

export default function Announcements() {
  return (
    <div className="mb-4">
      <h2 className="mb-2 ml-4 font-semibold sm:text-lg">Announcements</h2>
      <div className="mx-4 h-fit rounded-lg bg-white shadow-md">
        {announcement.map((item) => (
          <div className="px-4 pt-4 sm:px-6 sm:pt-6" key={item.id}>
            <h3 className="text-sm font-medium sm:text-base">{item.title}</h3>
            <p className="pb-4 text-justify text-sm sm:text-base">
              {item.description}
            </p>
            {item.id < 3 && (
              <div className="border-b-[1px] border-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
