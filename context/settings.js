import React from "react";

import { AntDesign } from "react-native-vector-icons";

export const APP_PAGES = {
  HOME: "HOME",
  LOGIN: "LOGIN",
  SEARCH: "SEARCH",
  NOTIFICATION: "NOTIFICATION",
  PROFILE: "PROFILE"
};

export const APP_ICONS = {
  HOME: (
    <AntDesign
      name="home"
      style={{
        color: "gray",
        fontSize: 28
      }}
    />
  ),
  SEARCH: (
    <AntDesign
      name="search1"
      style={{
        color: "gray",
        fontSize: 28
      }}
    />
  ),
  HEART: (
    <AntDesign
      name="heart"
      style={{
        color: "gray",
        fontSize: 28
      }}
    />
  ),
  USER: (
    <AntDesign
      name="user"
      style={{
        color: "gray",
        fontSize: 28
      }}
    />
  ),
  PLUS: (
    <AntDesign
      name="pluscircleo"
      style={{
        color: "white",
        fontSize: 28
      }}
    />
  ),
  MESSAGE: (
    <AntDesign
      name="message1"
      style={{
        color: "white",
        fontSize: 28
      }}
    />
  ),
  LOGO: (
    <AntDesign
      name="instagram"
      style={{
        color: "white",
        fontSize: 28
      }}
    />
  ),
  VIRTICALDOTS: (
    <AntDesign
      name="ellipsis1"
      style={{
        color: "white",
        fontSize: 28
      }}
    />
  )
};

export const APP_STYLE = {};

export const dataset = [
  {
    id: 1,
    name: "Raoul Anthony New Bock",
    profilePicture:
      "https://i.kym-cdn.com/entries/icons/facebook/000/034/213/cover2.jpg"
  },
  {
    id: 2,
    name: "This is not Bock",
    profilePicture:
      "https://pbs.twimg.com/profile_images/863359605086314496/ynhvFRnB_400x400.jpg"
  },
  {
    id: 3,
    name: "Why are you Bock",
    profilePicture:
      "https://pbs.twimg.com/profile_images/863359605086314496/ynhvFRnB_400x400.jpg"
  },
  {
    id: 4,
    name: "Maaaaan Bock",
    profilePicture:
      "https://pbs.twimg.com/profile_images/863359605086314496/ynhvFRnB_400x400.jpg"
  },
  {
    id: 5,
    name: "baddie Bock",
    profilePicture:
      "https://pbs.twimg.com/profile_images/863359605086314496/ynhvFRnB_400x400.jpg"
  },
  {
    id: 6,
    name: "pac Bock",
    profilePicture:
      "https://pbs.twimg.com/profile_images/863359605086314496/ynhvFRnB_400x400.jpg"
  }
];
