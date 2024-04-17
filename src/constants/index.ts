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
    description:
      "New update is coming soon. Our site will be undergoing maintenance on",
  },
  {
    id: 2,
    title: "New Update",
    description:
      "Get ready for a wild ride! Our latest update includes dancing unicorns and flying spaghetti code. 🦄🍝",
  },
  {
    id: 3,
    title: "Update Privacy Policy",
    description:
      "We’ve updated our privacy policy to include a section on how we protect your data from alien invasions. 👽🔒",
  },
];

// Calculate the maintenance date (3 days from today)
const currentDate = new Date();
const maintenanceDate = new Date(currentDate);
maintenanceDate.setDate(currentDate.getDate() + 3);

// Format the maintenance date as "Day, Month Day, Year" with date-fns
const formattedMaintenanceDate = format(maintenanceDate, "EEE, MMMM d, yyyy");

// add dynamic formatted maintenance date to the announcement description
announcement[0].description += ` ${formattedMaintenanceDate}, from 23:00 to 24:00 (UTC+7).`;

export type trendingDataProps = {
  id: number;
  userName: string;
  description: string;
  imageSrc: string;
};

export const trendingData: trendingDataProps[] = [
  {
    id: 1,
    userName: "@rocky",
    description: "World Class Model",
    imageSrc:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=3023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    userName: "@joker",
    description: "Super Villain",
    imageSrc:
      "https://images.unsplash.com/photo-1570805140270-9d3ce9325319?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    userName: "@taylor",
    description: "Aspire Singer",
    imageSrc:
      "https://images.unsplash.com/photo-1608319917470-9d9179430f8d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 4,
    userName: "@cena",
    description: "You Can't See Me",
    imageSrc:
      "https://images.unsplash.com/photo-1595947006841-0984683d036e?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
