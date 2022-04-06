import React from "react";
import * as AiIcons from "react-icons/ai";
import AddFavourite from "../Favourites/AddFavourite";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text1",
  },

  {
    title: "Watchlist",
    path: "/Watchlist",
    icon: <AddFavourite />,
    cName: "nav-text2",
  },
];
