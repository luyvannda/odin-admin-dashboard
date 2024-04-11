import { format } from "date-fns"; // this is a popular date format library for JS and TS

export const navigation = [
  { id: 1, name: "Home", icon: "home", href: "#", current: true },
  { id: 2, name: "Messages", icon: "message", href: "#", current: false },
  { id: 3, name: "History", icon: "history", href: "#", current: false },
  { id: 4, name: "Tasks", icon: "task", href: "#", current: false },
  { id: 5, name: "Communities", icon: "groups", href: "#", current: false },
];

export const profileMenu = [
  { id: 1, name: "Your Profile", icon: "person", href: "#" },
  { id: 2, name: "Settings", icon: "settings", href: "#" },
  { id: 3, name: "Support", icon: "support_agent", href: "#" },
  { id: 4, name: "Privacy", icon: "lock", href: "#" },
  { id: 5, name: "Sign Out", icon: "logout", href: "#" },
];

export const announcement = [
  {
    id: 1,
    title: "Site Maintenance",
    description: "New update is coming soon. Our site will be maintenance on",
  },
  { id: 2, title: "", description: "" },
  { id: 3, title: "", description: "" },
];

// Calculate the maintenance date (3 days from today)
const currentDate = new Date();
const maintenanceDate = new Date(currentDate);
maintenanceDate.setDate(currentDate.getDate() + 3);

// Format the maintenance date as "Day, Month Day, Year" with date-fns
const formattedMaintenanceDate = format(maintenanceDate, "EEE, MMMM d, yyyy");

console.log(formattedMaintenanceDate);

// add dynamic formatted maintenance date to the announcement description
announcement[0].description += ` ${formattedMaintenanceDate}.`;

console.log(announcement);
