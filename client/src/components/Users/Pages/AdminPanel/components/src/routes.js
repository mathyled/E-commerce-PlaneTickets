// import
import Dashboard from "./views/Dashboard/Dashboard/index.js";
import { userTable, ordersTable, flightsTable } from "./views/Dashboard/Tables/index";
import Profile from "./views/Dashboard/Profile";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "./components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: userTable,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: ordersTable,
    layout: "/admin",
  },
  {
    path: "/flights",
    name: "Flights",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: flightsTable,
    layout: "/admin",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
    ],
  },
];
export default dashRoutes;
