import React, { useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import AddFavourite from "../Favourites/AddFavourite";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: `Watchlist`,
    path: "/Watchlist",
    icon: <AddFavourite />,
    cName: "nav-text",
  },
];
