import React from "react";

import { AntDesign, Ionicons } from "react-native-vector-icons";

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
      name="hearto"
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
  ),
  OPTIONSHEART: (
    <AntDesign
      name="hearto"
      style={{
        color: "white",
        fontSize: 20
      }}
    />
  ),
  OPTIONSMESSAGE: (
    <AntDesign
      name="message1"
      style={{
        color: "white",
        fontSize: 20
      }}
    />
  ),
  OPTIONSBOOKMARK: (
    <AntDesign
      name="staro"
      style={{
        color: "white",
        fontSize: 25
      }}
    />
  ),
  OPTIONSSHARE: (
    <Ionicons
      name="share-outline"
      style={{
        color: "white",
        fontSize: 22
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
      "https://i.kym-cdn.com/entries/icons/facebook/000/034/213/cover2.jpg",
    userPost: "https://miro.medium.com/max/1400/1*R4mzP3laE4-GVLJSIuV6yg.jpeg",
    userPostLike: 140,
    caption: "React is just the best to start programming."
  },
  {
    id: 2,
    name: "This is not Bock",
    profilePicture:
      "https://pbs.twimg.com/profile_images/863359605086314496/ynhvFRnB_400x400.jpg",
    userPost: "https://miro.medium.com/max/1400/1*R4mzP3laE4-GVLJSIuV6yg.jpeg",
    userPostLike: 10140,
    caption:
      "what is better then react, if you have any thoughts please comment bellow and share your thoughts. Because what i think is that you can do so much more with react then with other programming languages. "
  },
  {
    id: 3,
    name: "Why are you Bock",
    profilePicture:
      "https://pbs.twimg.com/profile_images/863359605086314496/ynhvFRnB_400x400.jpg",
    userPost: "https://miro.medium.com/max/1400/1*R4mzP3laE4-GVLJSIuV6yg.jpeg",
    userPostLike: 1400,
    caption:
      "I just dropped my new youtube video, link in by Bio check it out and dont forget to leave a like and subscribe"
  },
  {
    id: 4,
    name: "Maaaaan Bock",
    profilePicture:
      "https://pbs.twimg.com/profile_images/863359605086314496/ynhvFRnB_400x400.jpg",
    userPost: "https://miro.medium.com/max/1400/1*R4mzP3laE4-GVLJSIuV6yg.jpeg",
    userPostLike: 1200,
    caption:
      "I just dropped my new youtube video, link in by Bio check it out and dont forget to leave a like and subscribe"
  },
  {
    id: 5,
    name: "baddie Bock",
    profilePicture:
      "https://pbs.twimg.com/profile_images/863359605086314496/ynhvFRnB_400x400.jpg",
    userPost: "https://miro.medium.com/max/1400/1*R4mzP3laE4-GVLJSIuV6yg.jpeg",
    userPostLike: 7200,
    caption: "I just "
  },
  {
    id: 6,
    name: "pac Bock",
    profilePicture:
      "https://pbs.twimg.com/profile_images/863359605086314496/ynhvFRnB_400x400.jpg",
    userPost: "https://miro.medium.com/max/1400/1*R4mzP3laE4-GVLJSIuV6yg.jpeg",
    userPostLike: 9200,
    caption:
      "I just dropped my new youtube video, link in by Bio check it out and dont forget to leave a like and subscribe"
  }
];
