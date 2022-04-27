import React, { useContext, useEffect } from "react";

import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";

import { APP_PAGES } from "./context/settings";
import { AppProvider, AppContext } from "./context/AppProvider";
import HomeScreen from "./Screen/HomeScreen";
import SearchScreen from "./Screen/SearchScreen";

const NavComp = () => {
  const { navPage, setNavPage, user, setUser } = useContext(AppContext);
  const onSetNavPage = (e) => {
    setNavPage(e);
  };

  useEffect(() => {
    console.log("App Nav: ", navPage);
  }, [navPage]);
  return (
    <View>
      <StatusBar barStyle="light-content" />
      {navPage === APP_PAGES.HOME && <HomeScreen setNavPage={onSetNavPage} />}
      {navPage === APP_PAGES.SEARCH && <SearchScreen />}
    </View>
  );
};

export default function App() {
  return (
    <AppProvider>
      <SafeAreaView>
        <NavComp />
      </SafeAreaView>
    </AppProvider>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  },
  view1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  view2: {
    flex: 10,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center"
  },
  view3: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18
  }
});
