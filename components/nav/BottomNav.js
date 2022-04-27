import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { APP_ICONS, APP_PAGES } from "../../context/settings";
import { AppContext } from "../../context/AppProvider";

const BottomNav = () => {
  const { navPage, setNavPage } = React.useContext(AppContext);
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <TouchableOpacity onPress={() => setNavPage(APP_PAGES.HOME)}>
          {APP_ICONS.HOME}
        </TouchableOpacity>
      </View>
      <View style={styles.view2}>
        <TouchableOpacity onPress={() => setNavPage(APP_PAGES.SEARCH)}>
          {APP_ICONS.SEARCH}
        </TouchableOpacity>
      </View>
      <View style={styles.view3}>
        <TouchableOpacity>{APP_ICONS.HEART}</TouchableOpacity>
      </View>
      <View style={styles.view4}>
        <TouchableOpacity>{APP_ICONS.USER}</TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "row"
  },
  view1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  view2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  view3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  view4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18
  }
});
